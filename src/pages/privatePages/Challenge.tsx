import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import ChallengeById from '../../components/Challenge/ChallengeById'
import ChallengeMembers from '../../components/Challenge/ChallengeMembers'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import { postApi } from '../../services/PostService'

const Challenge: FC = () => {
    const params = useParams()
    const {data: challenge, isLoading} = postApi.useGetChallengeByIdQuery(params.id!)
    const {data: challengeMembers} = postApi.useGetChallengeMembersQuery(params.id!)
    
    return (
        <MainWrapper>
            {isLoading && <h1>loading</h1>}
            {challenge && <ChallengeById challenge={challenge} />}
            {challengeMembers && <ChallengeMembers challengeMembers={challengeMembers} />}
        </MainWrapper>
    )
}

export default Challenge