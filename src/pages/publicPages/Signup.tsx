import { Button } from '@mui/material'
import React from 'react'
import FormWrapper from '../../components/FormWrapper/FormWrapper'
import Input from '../../components/Input/Input'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

const Signup = () => {
    return (
        <MainWrapper>
            <FormWrapper>
                <Input label='First name'/>
                <Input label='Surname'/>
                <Input label='Username'/>
                <Input label='Email'/>
                <Input label='Password'/>
                <Input label='Repeat password'/>
                <Button variant="contained">Signup</Button>
            </FormWrapper>
        </MainWrapper>
    )
}

export default Signup