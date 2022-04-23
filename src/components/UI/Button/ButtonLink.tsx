import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'

interface IButtonLinkProps {
    children: any
}

const LinkWrapper = styled(Button)({
    color: '#12043f',
    background: '#885fff',
    display: 'flex',
    justifyContent: 'space-between',
})

const ButtonLink: FC<IButtonLinkProps> = ({children}) => {
    return (
        <LinkWrapper variant="contained">{children}</LinkWrapper>
    )
}

export default ButtonLink