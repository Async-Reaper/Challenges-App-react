import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const SignoutButton = styled(Button)({
    background: '#7f0000',
    color: '#ffcccc',
})

interface ISignoutProps {
    onClick: () => void
}

const Signout: FC<ISignoutProps> = ({onClick}) => {
    return (
        <SignoutButton type='submit' onClick={onClick} variant="contained">
                <ExitToAppOutlinedIcon />
                signout
        </SignoutButton>
    )
}

export default Signout