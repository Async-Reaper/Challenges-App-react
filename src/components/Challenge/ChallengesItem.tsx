import React, { FC } from 'react'
import { IChallenge } from '../../models/IChallenge'
import ChallengeWrapper from '../UI/ChallengeWrapper/ChallengeWrapper'

interface ChallengeItemProps {
    challenge: IChallenge
}

const ChallengesItem: FC<ChallengeItemProps> = ({challenge}) => {
    return (
        <ChallengeWrapper>
            <li>Name: {challenge.name}</li>
            <li>Creator: {challenge.creator}</li>
            <li>Goal: {challenge.goal}</li>
            <li>Bet: {challenge.bet}</li>
            <li>Bets sum: {challenge.bets_sum}</li>
            <li>Members amount: {challenge.members_amount}</li>
            <li>Finish datetime: {challenge.finish_datetime}</li>
        </ChallengeWrapper>
    )
}

export default ChallengesItem