import { Button } from '@mui/material'
import React, { FC } from 'react'
import { ICreateChallenge } from '../../models/ICreateChallenge'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormCreateChallenge: FC = () => {

    const newChallenge: ICreateChallenge = {
        name: '',
        finish_datetime: '',
        goal: '',
        description: '',
        requirements: '',
        bet: 0
    }

    return (
        <FormWrapper method='POST' onSubmit={}>
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