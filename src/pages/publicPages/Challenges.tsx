import React, { FC } from 'react'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import { postApi } from '../../services/PostService'

const Challenges: FC = () => {
    const {data: challenges, isLoading} = postApi.useGetAllChallengesQuery('')

    return (
        <MainWrapper>
            {isLoading && <h1>Loading</h1>}
            {challenges && challenges.map(challenge => 
                <ul key={challenge.challenge_id}>
                    <li>Name: {challenge.name}</li>
                    <li>Creator: {challenge.creator}</li>
                    <li>Goal: {challenge.goal}</li>
                    <li>Bet: {challenge.bet}</li>
                    <li>Bets sum: {challenge.bets_sum}</li>
                    <li>Members amount: {challenge.members_amount}</li>
                    <li>Finish datetime: {challenge.finish_datetime}</li>
                </ul>
            )}
        </MainWrapper>
    )
}

export default Challenges