import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { ICreateChallenge } from '../../models/ICreateChallenge'
import { createChallenge } from '../../services/ChallengesService'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormCreateChallenge: FC = () => {
    const dispatch = useTypedDispatch()
    const newChallenge: ICreateChallenge = {
        name: '',
        finish_datetime: '',
        goal: '',
        description: '',
        requirements: '',
        bet: 0
    }

    const handleCreateChallenge = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(createChallenge(newChallenge))
    }

    return (
        <FormWrapper method='POST' onSubmit={e => handleCreateChallenge(e)}>
            <Input 
                label='Finish datetime'
                onChange={e => newChallenge.finish_datetime = e.target.value}
            />
            <Input 
                label='Name'
                onChange={e => newChallenge.name = e.target.value}
            />
            <Input 
                label='Goal'
                onChange={e => newChallenge.goal = e.target.value}
            />
            <Input 
                label='Description'
                onChange={e => newChallenge.description = e.target.value}
            />
            <Input 
                label='Requirements'
                onChange={e => newChallenge.requirements = e.target.value}
            />
            <Button type='submit' variant="contained">Create challenge</Button>
        </FormWrapper>
    )
}

export default FormCreateChallenge