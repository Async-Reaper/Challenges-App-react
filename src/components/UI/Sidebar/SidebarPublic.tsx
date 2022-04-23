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
})

const SidebarPublic: FC = () => {
    return (
        <AsidePublic>
            <ButtonLink>
                <LoginOutlinedIcon />
                <Link to={'/login'}>Login</Link>
            </ButtonLink>
            <ButtonLink>
                <AssignmentIndOutlinedIcon />
                <Link to={'/signup'}>Signup</Link>
            </ButtonLink>
            <ButtonLink>
                <ModeStandbyIcon />
                <Link to={'/challenges'}>Challenges</Link>
            </ButtonLink>
        </AsidePublic>
    )
}

export default SidebarPublic