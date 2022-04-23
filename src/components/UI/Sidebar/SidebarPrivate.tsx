import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch'
import { signoutUser } from '../../../services/SignoutService'
import Signout from '../Button/Signout'
import SettingsIcon from '@mui/icons-material/Settings';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import ButtonLink from '../Button/ButtonLink'

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
            <ButtonLink>
                <SettingsIcon />
                <Link to={'/settings'}>Settings</Link>
            </ButtonLink>
            <ButtonLink>
                <ModeStandbyIcon />
                <Link to={'/challenges'}>Challenges</Link>
            </ButtonLink>
            <Signout onClick={() => handleSignout()}/>
        </AsidePrivate>
    )
}

export default SidebarPrivate