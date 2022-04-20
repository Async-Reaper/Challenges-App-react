import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import ChallengeById from '../../components/Challenge/ChallengeById'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import { postApi } from '../../services/PostService'

const Challenge: FC = () => {
    const params = useParams()
    console.log(params.id)
    const {data: challenge, isLoading} = postApi.useGetChallengeByIdQuery(8)
    return (
        <MainWrapper>
            {isLoading && <h1>loading</h1>}
            {challenge && <ChallengeById challenge={challenge} />}
            
        </MainWrapper>
    )
}

export default Challenge