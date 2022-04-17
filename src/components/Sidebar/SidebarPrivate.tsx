import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'

const AsidePrivate = styled('div')({
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr',
    gridGap: 15,
})

const SidebarPrivate: FC = () => {
    return (
        <AsidePrivate>
            <span>Settings</span>
            <span>Challenges</span>
            <Button variant="contained">signout</Button>
        </AsidePrivate>
    )
}

export default SidebarPrivate