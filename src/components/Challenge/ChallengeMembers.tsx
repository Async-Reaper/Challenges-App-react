import React, { FC } from 'react'
import { IChallengeMember } from '../../models/IChallengeMembers'
import ChallengeWrapper from '../UI/ChallengeWrapper/ChallengeWrapper'

interface ChallengeMembersProps {
    challengeMembers: IChallengeMember[]
}
const ChallengeMembers: FC<ChallengeMembersProps> = ({challengeMembers}) => {
    return (
        <ChallengeWrapper>
            Challenge members: 
            {challengeMembers.map(member => <li key={member.user_id} >{member.username}</li>)}
        </ChallengeWrapper>
    )
}

export default ChallengeMembers