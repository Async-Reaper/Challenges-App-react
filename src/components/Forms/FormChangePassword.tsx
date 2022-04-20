import { Button } from '@mui/material'
import React, { FC } from 'react'
import { IChangePassword } from '../../models/IChangePassword'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'

const FormChangePassword: FC = () => {

    const handleChangePassword = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const changeNewPassword: IChangePassword = {
        old_password: '',
        new_password: '',
        new_password2: ''
    }
    return (
        <FormWrapper method='PUT' onSubmit={e => handleChangePassword(e)}>
            <Input label='Old password' onChange={e => changeNewPassword.old_password = e.target.value}/>
            <Input label='New password' onChange={e => changeNewPassword.new_password = e.target.value}/>
            <Input label='New password' onChange={e => changeNewPassword.new_password2 = e.target.value}/>
            <Button type='submit' variant="contained">Change password</Button>
        </FormWrapper>
    )
}

export default FormChangePassword