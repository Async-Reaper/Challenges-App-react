import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IChangePassword } from '../../models/IChangePassword'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'
import { changePassword } from '../../services/SettingsService'
import { errorForm } from '../../store/reducers/errorSlice'

const FormChangePassword: FC = () => {
    const dispatch = useTypedDispatch()
    
    const handleChangePassword = (e: React.MouseEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (newPassword.old_password !== '' && newPassword.new_password !== '' && newPassword.new_password2 !== '') {
            dispatch(changePassword(newPassword)) 
        } else {
            dispatch(errorForm('Inputs must be filled!'))
        }
    }

    const newPassword: IChangePassword = {
        old_password: '',
        new_password: '',
        new_password2: ''
    }
    return (
        <FormWrapper method='PUT' onSubmit={e => handleChangePassword(e)}>
            <Input label='Old password' type='password' onChange={e => newPassword.old_password = e.target.value}/>
            <Input label='New password' type='password' onChange={e => newPassword.new_password = e.target.value}/>
            <Input label='New password' type='password' onChange={e => newPassword.new_password2 = e.target.value}/>
            <Button type='submit' variant="contained">Change password</Button>
        </FormWrapper>
    )
}

export default FormChangePassword