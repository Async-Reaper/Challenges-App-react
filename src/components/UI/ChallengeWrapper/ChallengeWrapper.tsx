import styled from '@emotion/styled'
import React, { FC } from 'react'

interface ChallengeWrapperProps {
    children: any;
    dataTestId?: string
}

const ChallengesWrapper = styled('ul')({
    boxShadow: '0 0 10px #362666',
    background: '#362666',
    color: '#e7dfff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 25,
})

const ChallengeWrapper: FC<ChallengeWrapperProps> = ({ children, dataTestId }) => {
    return (
        <ChallengesWrapper data-testid={dataTestId}>{children}</ChallengesWrapper>
    )
}

export default ChallengeWrapper