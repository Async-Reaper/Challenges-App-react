import React, { FC } from 'react'
import ChallengeById from '../../components/Challenge/ChallengeById'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'

const Challenge: FC = () => {
    return (
        <MainWrapper>
            <ChallengeById />
        </MainWrapper>
    )
}

export default Challenge