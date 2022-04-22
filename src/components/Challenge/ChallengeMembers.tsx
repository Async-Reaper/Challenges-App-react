import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IChallengeMember } from '../../models/IChallengeMembers'
import ChallengeWrapper from '../UI/ChallengeWrapper/ChallengeWrapper'
import {acceptChallenge} from '../../services/ChallengesService'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { setAcceptStatus } from '../../store/reducers/challengesSlice'

interface ChallengeMembersProps {
    challengeMembers: IChallengeMember[]
}
const ChallengeMembers: FC<ChallengeMembersProps> = ({challengeMembers}) => {
    const {acceptStatus} = useTypedSelector(state => state.challenges)
    const dispatch = useTypedDispatch()
    const params = useParams()

    challengeMembers.map(member => 
        member.username === localStorage.getItem('userName') ?
            dispatch(setAcceptStatus(true)) : null
    )

    return (
        <ChallengeWrapper>
            Challenge members: 
            {challengeMembers.map(member => 
                    <li key={member.user_id} >{member.username}</li>
            )}
            { acceptStatus 
                ? null
                : <Button type='submit' variant="contained" onClick={() => dispatch(acceptChallenge(params.id!))}>Accept challenge</Button> 
            }
        </ChallengeWrapper>
    )
}

export default ChallengeMembers