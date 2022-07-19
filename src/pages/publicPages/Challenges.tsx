import React, { FC } from 'react'
import ChallengesItem from '../../components/Challenge/ChallengesItem'
import CreateChallenge from '../../components/Challenge/CreateChallenge'
import Loader from '../../components/UI/Loader/Loader'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import Popup from '../../components/UI/Popup/Popup'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { postApi } from '../../services/PostService'

const Challenges: FC = () => {
    const { data: challenges, isLoading } = postApi.useGetAllChallengesQuery('')
    const { loginStatus } = useTypedSelector(state => state.login)
    return (
        <MainWrapper data-testid='challenges-page'>
            <Popup />
            {loginStatus && <CreateChallenge />}
            {isLoading && <Loader />}
            {challenges && challenges.map(challenge =>
                <ChallengesItem key={challenge.challenge_id} challenge={challenge} />
            )}
        </MainWrapper>
    )
}

export default Challenges