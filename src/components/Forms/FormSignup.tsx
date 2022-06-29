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
import { useInput } from '../../hooks/useInput'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const FormSignup: FC = () => {
    const dispatch = useTypedDispatch()
    const { error, message } = useTypedSelector(state => state.signup)

    const firstName = useInput('', {isEmpty: true})
    const surname = useInput('', {isEmpty: true})
    const userName = useInput('', {isEmpty: true})
    const email = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true})
    const repeatPassword = useInput('', {isEmpty: true})

    const signupData: IUserSignup = {
        first_name: firstName.value,
        surname: surname.value,
        username: userName.value,
        email: email.value,
        password: password.value,
        password2: repeatPassword.value
    }

    const handleSignup = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (signupData.email !== '' && signupData.first_name !== '' && signupData.password !== '' && signupData.password2 !== '' && signupData.username !== '' && signupData.surname !== '') {
            dispatch(signupUser(signupData))
        }
    }
    return (
        <FormWrapper method='POST' onSubmit={e => handleSignup(e)}>
            <Input 
                label='First name'
                value={firstName.value}
                onChange={firstName.onChange}
            />
            { (firstName.isDirty && firstName.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            <Input 
                label='Surname'
                value={surname.value}
                onChange={surname.onChange}
            />
            { (surname.isDirty && surname.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            <Input 
                label='Username'
                value={userName.value}
                onChange={userName.onChange}
            />
            { (userName.isDirty && userName.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            <Input 
                label='Email'
                type='email'
                value={email.value}
                onChange={email.onChange}
            />
            { (email.isDirty && email.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            <Input 
                label='Password'
                type='password'
                value={password.value}
                onChange={password.onChange}
            />
            { (password.isDirty && password.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            <Input 
                label='Repeat password'
                type='password'
                value={repeatPassword.value}
                onChange={repeatPassword.onChange}
            />
            { (repeatPassword.isDirty && repeatPassword.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            <Button type='submit' variant="contained">
                <AssignmentIndOutlinedIcon />
                Signup
            </Button>
            { error && <ErrorText>{message}</ErrorText>}
        </FormWrapper>
    )
}

export default FormSignup