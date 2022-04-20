import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch'
import { signoutUser } from '../../../services/SignoutService'

const AsidePrivate = styled('div')({
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr',
    gridGap: 15,
})

const SidebarPrivate: FC = () => {
    const dispatch = useTypedDispatch()
    return (
        <AsidePrivate>
            <Link to={'/settings'}>Settings</Link>
            <Link to={'/challenges'}>Challenges</Link>
            <Link to={'/challenges'}>
                <Button type='submit' onClick={() => dispatch(signoutUser())} variant="contained">
                    signout
                </Button>
            </Link>
        </AsidePrivate>
    )
}

export default SidebarPrivate