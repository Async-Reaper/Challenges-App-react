import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IChangePassword } from '../../models/IChangePassword'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'
import { changePassword } from '../../services/SettingsService'
import { errorForm } from '../../store/reducers/errorSlice'
import ErrorText from '../UI/Error/ErrorText'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useInput } from '../../hooks/useInput'

const FormChangePassword: FC = () => {
    const dispatch = useTypedDispatch()
    const { error, answer } = useTypedSelector(state => state.settings)

    const oldPassword = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true})
    const repeatPassword = useInput('', {isEmpty: true})

    const handleChangePassword = (e: React.MouseEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (newPassword.old_password !== '' && newPassword.new_password !== '' && newPassword.new_password2 !== '') {
            dispatch(changePassword(newPassword)) 
        }
    }

    const newPassword: IChangePassword = {
        old_password: oldPassword.value,
        new_password: password.value,
        new_password2: repeatPassword.value
    }

    return (
        <FormWrapper method='PUT' onSubmit={e => handleChangePassword(e)}>
            <Input 
                label='Old password' 
                type='password' 
                value={oldPassword.value} 
                onChange={oldPassword.onChange}
            />
            { (oldPassword.isDirty && oldPassword.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            <Input 
                label='New password' 
                type='password' 
                value={password.value} 
                onChange={password.onChange}
            />
            { (password.isDirty && password.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            <Input 
                label='New password' 
                type='password' 
                value={repeatPassword.value} 
                onChange={repeatPassword.onChange}
            />
            { (repeatPassword.isDirty && repeatPassword.isEmpty) && <ErrorText>The field is empty</ErrorText>}
            
            <Button type='submit' variant="contained">Change password</Button>
            
        </FormWrapper>
    )
}

export default FormChangePassword