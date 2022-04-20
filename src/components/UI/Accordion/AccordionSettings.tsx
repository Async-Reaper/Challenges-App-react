import React, { FC } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';

interface AccordionSettingsProps {
    name: string
    params: JSX.Element
}

const AccordionWrapper = styled(Accordion)({
    background: '#0C53A6',
    maxWidth: 400,
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