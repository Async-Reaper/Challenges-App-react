import styled from '@emotion/styled'
import React, { FC } from 'react'

interface ChallengeWrapperProps {
    children: any
}

const ChallengesWrapper = styled('ul')({
    boxShadow: '0 0 5px #0c53a6',
    background: '#0C53A6',
    color: '#141414',
    borderRadius: 10,
    padding: 20,
    marginBottom: 25,
})

const ChallengeWrapper: FC<ChallengeWrapperProps> = ({children}) => {
    return (
        <ChallengesWrapper>{children}</ChallengesWrapper>
    )
}

export default ChallengeWrapper