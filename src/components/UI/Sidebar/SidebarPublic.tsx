import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const AsidePublic = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
})

const SidebarPublic: FC = () => {
    return (
        <AsidePublic>
            <Link to={'/login'}>login</Link>
            <Link to={'/signup'}>signup</Link>
            <Link to={'/challenges'}>challenges</Link>
        </AsidePublic>
    )
}

export default SidebarPublic