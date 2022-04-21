import { Button } from '@mui/material'
import React, { FC } from 'react'
import ChallengesItem from '../../components/Challenge/ChallengesItem'
import CreateChallenge from '../../components/Challenge/CreateChallenge'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import { postApi } from '../../services/PostService'

const Challenges: FC = () => {
    const {data: challenges, isLoading} = postApi.useGetAllChallengesQuery('')

    return (
        <MainWrapper>
            <CreateChallenge />
            {isLoading && <h1>Loading</h1>}
            {challenges && challenges.map(challenge => 
                <ChallengesItem key={challenge.challenge_id} challenge={challenge}/>
            )}
        </MainWrapper>
    )
}

export default Challenges