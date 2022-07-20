import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../Button/ButtonLink'
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

const AsidePublic = styled('div')({
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr',
    gridGap: 15,
    '@media (max-width: 750px)': {
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    '@media (max-width: 520px)': {
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width: 360px)': {
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1fr',
    }
})

const SidebarPublic: FC = () => {
    return (
        <AsidePublic data-testid='sidebar-public'>
            <ButtonLink>
                <LoginOutlinedIcon />
                <Link to={'/login'} data-testid='link-login'>Login</Link>
            </ButtonLink>
            <ButtonLink>
                <AssignmentIndOutlinedIcon />
                <Link to={'/signup'} data-testid='link-signup'>Signup</Link>
            </ButtonLink>
            <ButtonLink>
                <ModeStandbyIcon />
                <Link to={'/challenges'} data-testid='link-challenges'>Challenges</Link>
            </ButtonLink>
        </AsidePublic>
    )
}

export default SidebarPublic