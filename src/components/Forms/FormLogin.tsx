import { Button } from '@mui/material'
import React, { FC } from 'react'
import FormWrapper from '../FormWrapper/FormWrapper'
import Input from '../Input/Input'

const FormLogin: FC = () => {
    return (
        <FormWrapper>
            <Input label='Login'/>
            <Input label='Password'/>
            <Button variant="contained">Login</Button>
        </FormWrapper>
    )
}

export default FormLogin