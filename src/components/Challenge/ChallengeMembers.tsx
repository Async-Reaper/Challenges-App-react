import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IChallengeMember } from '../../models/IChallengeMembers'
import ChallengeWrapper from '../UI/ChallengeWrapper/ChallengeWrapper'
import {acceptChallenge} from '../../services/ChallengesService'

interface ChallengeMembersProps {
    challengeMembers: IChallengeMember[]
}
const ChallengeMembers: FC<ChallengeMembersProps> = ({challengeMembers}) => {
    const dispatch = useTypedDispatch()
    const params = useParams()
    return (
        <ChallengeWrapper>
            Challenge members: 
            {challengeMembers.map(member => 
                    <li key={member.user_id} >{member.username}</li>
            )}
            {challengeMembers.map(member => 
                member.username !== localStorage.getItem('userName') ?
                    <Button type='submit' variant="contained" onClick={() => dispatch(acceptChallenge(params.id!))}>Accept challenge</Button> : null
            )}
        </ChallengeWrapper>
    )
}

export default ChallengeMembers