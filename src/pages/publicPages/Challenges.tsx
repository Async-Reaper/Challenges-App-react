import { Button } from '@mui/material'
import React, { FC } from 'react'
import ChallengesItem from '../../components/Challenge/ChallengesItem'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import { postApi } from '../../services/PostService'

const Challenges: FC = () => {
    const {data: challenges, isLoading} = postApi.useGetAllChallengesQuery('')

    return (
        <MainWrapper>
            <Button type='submit' variant="contained">Create challenge</Button>
            {isLoading && <h1>Loading</h1>}
            {challenges && challenges.map(challenge => 
                <ChallengesItem key={challenge.challenge_id} challenge={challenge}/>
            )}
        </MainWrapper>
    )
}

export default Challenges