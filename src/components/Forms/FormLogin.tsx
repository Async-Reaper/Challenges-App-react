import { Button } from '@mui/material'
import React, { FC } from 'react'
import Input from '../Input/Input'

const FormLogin: FC = () => {
    return (
        <form>
            <Input label='Login'/>
            <Input label='Password'/>
            <Button variant="contained">Login</Button>
        </form>
    )
}

export default FormLogin