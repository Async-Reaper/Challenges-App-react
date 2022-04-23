import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const AsidePublic = styled('div')({
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr',
    gridGap: 15,
})

const SidebarPublic: FC = () => {
    return (
        <AsidePublic>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>Signup</Link>
            <Link to={'/challenges'}>Challenges</Link>
        </AsidePublic>
    )
}

export default SidebarPublic