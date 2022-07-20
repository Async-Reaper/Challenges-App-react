import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const SignoutButton = styled(Button)({
    background: '#7f0000',
    color: '#ffcccc',
    display: 'flex',
    justifyContent: 'space-between',

    '&:hover': {
        background: '#660000'
    }
})

interface ISignoutProps {
    onClick: () => void;
    dataTestId: string
}

const Signout: FC<ISignoutProps> = ({ onClick, dataTestId }) => {
    return (
        <SignoutButton data-testid={dataTestId} type='submit' onClick={onClick} variant="contained">
            <ExitToAppOutlinedIcon />
            signout
        </SignoutButton>
    )
}

export default Signout