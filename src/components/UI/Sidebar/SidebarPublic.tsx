import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const AsidePublic = styled('div')({
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '15px 0',
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