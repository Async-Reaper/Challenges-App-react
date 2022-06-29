import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IUserLogin } from '../../models/IUserLogin'
import { loginUser } from '../../services/LoginService'
import { errorForm } from '../../store/reducers/errorSlice'
import ErrorText from '../UI/Error/ErrorText'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useInput } from '../../hooks/useInput'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const FormLogin: FC = () => {
    const dispatch = useTypedDispatch()
    const email = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true})
    const { answer, error } = useTypedSelector(state => state.login)
    const dataLogin: IUserLogin = {
        username: '',
        password: ''
    }

    const handleLogin = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        email.onBlur()
        password.onBlur()

        if (!email.isEmpty && !password.isEmpty) {
            dispatch(loginUser(dataLogin))
        }
    }

    return (
        <FormWrapper method='POST' onSubmit={e => handleLogin(e)}>
            <Input 
                label='Login'
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
            <Button type='submit' variant="contained">
                <LoginOutlinedIcon />
                Login
            </Button>
            { error && <ErrorText>{answer}</ErrorText>}
        </FormWrapper>
    )
}

export default FormLogin