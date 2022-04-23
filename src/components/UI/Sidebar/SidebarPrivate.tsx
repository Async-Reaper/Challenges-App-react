import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch'
import { signoutUser } from '../../../services/SignoutService'
import Signout from '../Button/Signout'

const AsidePrivate = styled('div')({
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr',
    gridGap: 15,
})


const SidebarPrivate: FC = () => {
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()
    const handleSignout = () => {
        navigate('/challenges')
        dispatch(signoutUser())
    }

    return (
        <AsidePrivate>
            <Link to={'/settings'}>Settings</Link>
            <Link to={'/challenges'}>Challenges</Link>
            <Signout onClick={() => handleSignout()}/>
        </AsidePrivate>
    )
}

export default SidebarPrivate