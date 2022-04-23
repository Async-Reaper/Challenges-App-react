import React, { FC } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';

interface AccordionSettingsProps {
    name: string
    params: JSX.Element
}

const AccordionWrapper = styled(Accordion)({
    background: '#12043f',
    color: '#885fff',
    maxWidth: 400,
    '& .MuiSvgIcon-root' : {
        color: '#885fff'
    }
})

const AccordionSettings: FC<AccordionSettingsProps> = ({name, params}) => {
    return (
        <AccordionWrapper>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {params}
            </AccordionDetails>
        </AccordionWrapper>
    )
}

export default AccordionSettings