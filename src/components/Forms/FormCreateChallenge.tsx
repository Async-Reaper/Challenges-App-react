import { Button } from '@mui/material'
import React, { FC } from 'react'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormCreateChallenge: FC = () => {
    const newChallene = {
        name: '',
        finish_datetime: '',
        goal: '',
        description: '',
        requirements: '',
        bet: 0
    }
    return (
        <FormWrapper method='POST' onSubmit={}>
            <Input label='Name'/>
            <Input label='Finish datetime'/>
            <Input label='Goal'/>
            <Input label='Description'/>
            <Input label='Requirements'/>
            <Button type='submit' variant="contained">Create challenge</Button>
        </FormWrapper>
    )
}

export default FormCreateChallenge