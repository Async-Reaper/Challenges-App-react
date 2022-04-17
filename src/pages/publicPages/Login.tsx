import { Button } from '@mui/material'
import React, { FC } from 'react'
import Input from '../../components/Input/Input'

const Login: FC = () => {
    return (
        <form>
            <Input label='Login'/>
            <Input label='Password'/>
            <Button variant="contained">Login</Button>
        </form>
    )
}

export default Login