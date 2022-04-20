import { Button } from '@mui/material'
import React, { FC } from 'react'
import { IUserSignup } from '../../models/IUserSignup'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormSignup: FC = () => {

    const signupData: IUserSignup = {
        first_name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    const handleSignup = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    return (
        <FormWrapper onSumbit={e => handleSignup(e)}>
            <Input 
                label='First name'
                onChange={e => signupData.first_name}
            />
            <Input 
                label='Surname'
                onChange={e => signupData.surname}
            />
            <Input 
                label='Username'
                onChange={e => signupData.username}
            />
            <Input 
                label='Email'
                onChange={e => signupData.email}
            />
            <Input 
                label='Password'
                onChange={e => signupData.password}
            />
            <Input 
                label='Repeat password'
                onChange={e => signupData.password2}
            />
            <Button variant="contained">Signup</Button>
        </FormWrapper>
    )
}

export default FormSignup