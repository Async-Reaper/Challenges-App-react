import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IChallenge } from '../../models/IChallenge'
import ChallengeWrapper from '../UI/ChallengeWrapper/ChallengeWrapper'

interface ChallengeItemProps {
    challenge: IChallenge
}

const ChallengesItem: FC<ChallengeItemProps> = ({challenge}) => {
    const navigate = useNavigate()
    return (
        <ChallengeWrapper>
            <li>Name: {challenge.name}</li>
            <li>Creator: {challenge.creator}</li>
            <li>Goal: {challenge.goal}</li>
            <li>Members amount: {challenge.members_amount}</li>
            <li>Finish datetime: {challenge.finish_datetime}</li>
            <Button variant="contained" onClick={() => navigate(`/challenges/${challenge.challenge_id}`)}>Open</Button>
        </ChallengeWrapper>
    )
}

export default ChallengesItem