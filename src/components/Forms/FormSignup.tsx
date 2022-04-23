import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IUserSignup } from '../../models/IUserSignup'
import { signupUser } from '../../services/SignupService'
import { errorForm } from '../../store/reducers/errorSlice'
import ErrorText from '../UI/Error/ErrorText'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

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

    const handleSignup = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (signupData.email !== '' && signupData.first_name !== '' && signupData.password !== '' && signupData.password2 !== '' && signupData.username !== '' && signupData.surname !== '') {
            dispatch(signupUser(signupData))
        } else {
            dispatch(errorForm('Inputs must be filled!'))
        }
    }
    return (
        <FormWrapper method='POST' onSubmit={e => handleSignup(e)}>
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
            <Button type='submit' variant="contained">
                <AssignmentIndOutlinedIcon />
                Signup
            </Button>
            <ErrorText />
        </FormWrapper>
    )
}

export default FormSignup