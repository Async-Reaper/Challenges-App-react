import React, { FC } from 'react'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import { postApi } from '../../services/PostService'

const Challenges: FC = () => {
    const { data: challenges, isLoading } = postApi.useGetAllChallengesQuery('')
    return (
        <MainWrapper>
            {isLoading && <h1>Loading</h1>}
            {challenges && challenges.map(challenge => {
                <ul>
                    <li>{challenge.creator}</li>
                    <li>{challenge.name}</li>
                    <li>{challenge.goal}</li>
                    <li>{challenge.bet}</li>
                    <li>{challenge.bets_sum}</li>
                    <li>{challenge.members_amount}</li>
                    <li>{challenge.finish_datetime}</li>
                </ul>
            })}
        </MainWrapper>
    )
}

export default Challenges