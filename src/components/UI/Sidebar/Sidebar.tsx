import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import SidebarPrivate from './SidebarPrivate'
import SidebarPublic from './SidebarPublic'

const Aside = styled('aside')({
    width: '170px',
    height: '100vh',
    color: '#12043f',
    padding: '20px',
    boxShadow: '0px 0px 10px #12043f',
    background:' #12043f',
})

const Sidebar: FC = () => {
    const {loginStatus} = useTypedSelector(state => state.login)
    return (
        <Aside>
            {loginStatus ? <SidebarPrivate/> : <SidebarPublic />}
        </Aside>
    )
}

export default Sidebar