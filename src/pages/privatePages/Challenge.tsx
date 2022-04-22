import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import ChallengeById from '../../components/Challenge/ChallengeById'
import ChallengeMembers from '../../components/Challenge/ChallengeMembers'
import Loader from '../../components/UI/Loader/Loader'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import Popup from '../../components/UI/Popup/Popup'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { postApi } from '../../services/PostService'

const Challenge: FC = () => {
    const params = useParams()
    const {data: challenge, isLoading} = postApi.useGetChallengeByIdQuery(params.id!)
    const {data: challengeMembers} = postApi.useGetChallengeMembersQuery(params.id!)
    const {answer} = useTypedSelector(state => state.challenges)
    return (
        <MainWrapper>
            <Popup>{answer}</Popup>
            {isLoading && <Loader />}
            {challenge && <ChallengeById challenge={challenge} />}
            {challengeMembers && <ChallengeMembers challengeMembers={challengeMembers} />}
        </MainWrapper>
    )
}

export default Challenge