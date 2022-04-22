import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IUserSignup } from '../../models/IUserSignup'
import { signupUser } from '../../services/SignupService'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormSignup: FC = () => {
    const dispatch = useTypedDispatch()
    const signupData: IUserSignup = {
        first_name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    const handleSignup = (e: React.MouseEvent<HTMLFormElement>, data: IUserSignup) => {
        e.preventDefault();
        dispatch(signupUser(data))
    }
    return (
        <FormWrapper method='POST' onSubmit={e => handleSignup(e, signupData)}>
            <Input 
                label='First name'
                onChange={e => {
                    signupData.first_name = e.target.value
                }}
            />
            <Input 
                label='Surname'
                onChange={e => {
                    signupData.surname = e.target.value
                }}
            />
            <Input 
                label='Username'
                onChange={e => {
                    signupData.username = e.target.value
                }}
            />
            <Input 
                label='Email'
                type='email'
                onChange={e => {
                    signupData.email = e.target.value
                }}
            />
            <Input 
                label='Password'
                type='password'
                onChange={e => {
                    signupData.password = e.target.value
                }}
            />
            <Input 
                label='Repeat password'
                type='password'
                onChange={e => {
                    signupData.password2 = e.target.value
                }}
            />
            <Button type='submit' variant="contained">Signup</Button>
        </FormWrapper>
    )
}

export default FormSignup