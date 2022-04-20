import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IUserLogin } from '../../models/IUserLogin'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormLogin: FC = () => {
    const {} = useTypedSelector(state => state.loginSlice)

    const dataLogin: IUserLogin = {
        username: '',
        password: ''
    }
    return (
        <FormWrapper>
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