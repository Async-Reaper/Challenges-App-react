import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import ChallengeById from '../../components/Challenge/ChallengeById'
import ChallengeMembers from '../../components/Challenge/ChallengeMembers'
import Loader from '../../components/UI/Loader/Loader'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import Popup from '../../components/UI/Popup/Popup'
import { postApi } from '../../services/PostService'

const Challenge: FC = () => {
    const params = useParams()
    const { data: challenge, isLoading } = postApi.useGetChallengeByIdQuery(params.id!)
    const { data: challengeMembers } = postApi.useGetChallengeMembersQuery(params.id!)

    return (
        <MainWrapper data-testid='challengeById-page'>
            <Popup />
            {isLoading && <Loader />}
            {challenge && <ChallengeById challenge={challenge} />}
            {challengeMembers && <ChallengeMembers challengeMembers={challengeMembers} />}
        </MainWrapper>
    )
}

export default Challenge