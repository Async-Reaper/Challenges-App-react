import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const AsidePrivate = styled('div')({
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr',
    gridGap: 15,
})

const SidebarPrivate: FC = () => {
    return (
        <AsidePrivate>
            <Link to={'/settings'}>Settings</Link>
            <Link to={'/challenges'}>Challenges</Link>
            <Button variant="contained">
                <Link to={'challenges'}>signout</Link>    
            </Button>
        </AsidePrivate>
    )
}

export default SidebarPrivate