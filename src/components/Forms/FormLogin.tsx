import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IUserLogin } from '../../models/IUserLogin'
import { loginUser } from '../../services/LoginService'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormLogin: FC = () => {
    const dispatch = useTypedDispatch()

    const dataLogin: IUserLogin = {
        username: '',
        password: ''
    }

    const handleLogin = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loginUser(dataLogin))
    }

    return (
        <FormWrapper onSumbit={e => handleLogin(e)}>
            <Input 
                label='Login'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dataLogin.username = e.target.value}
            />
            <Input 
                label='Password'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dataLogin.password = e.target.value}
            />
            <Button variant="contained">Login</Button>
        </FormWrapper>
    )
}

export default FormLogin