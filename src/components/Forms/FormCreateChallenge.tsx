import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ICreateChallenge } from '../../models/ICreateChallenge'
import { createChallenge } from '../../services/ChallengesService'
import { setDate } from '../../store/reducers/dateSlice'
import { errorForm } from '../../store/reducers/errorSlice'
import Calendar from '../UI/Calendar/Calendar'
import ErrorText from '../UI/Error/ErrorText'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormCreateChallenge: FC = () => {
    const dispatch = useTypedDispatch()
    const {date} = useTypedSelector(state => state.date)
    const newChallenge: ICreateChallenge = {
        name: '',
        finish_datetime: date,
        goal: '',
        description: '',
        requirements: '',
        bet: 0
    }

    const handleCreateChallenge = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newChallenge.name !== '' && newChallenge.goal !== '' && newChallenge.description !== '' && newChallenge) {
            dispatch(createChallenge(newChallenge))
        } else {
            dispatch(errorForm('Inputs must be filled!'))
        }
        
    }

    return (
        <FormWrapper method='POST' onSubmit={e => handleCreateChallenge(e)}>
            <Calendar label="Finish datetime: "
                        value={date}
                        onChange={(newDate) => dispatch(setDate(newDate))}
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
            <ErrorText />
        </FormWrapper>
    )
}

export default FormCreateChallenge