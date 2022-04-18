import { Button } from '@mui/material'
import React, { FC } from 'react'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormSignup: FC = () => {
    return (
        <FormWrapper>
            <Input label='First name'/>
            <Input label='Surname'/>
            <Input label='Username'/>
            <Input label='Email'/>
            <Input label='Password'/>
            <Input label='Repeat password'/>
            <Button variant="contained">Signup</Button>
        </FormWrapper>
    )
}

export default FormSignup