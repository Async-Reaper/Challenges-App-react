import { Button } from '@mui/material'
import React, { FC } from 'react'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

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