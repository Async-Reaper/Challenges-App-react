import React, { FC } from 'react'
import { IChangeEmail } from '../../models/IChangeEmail'
import FormWrapper from '../UI/FormWrapper/FormWrapper'
import Input from '../UI/Input/Input'


const FormChangeEmail: FC = () => {
    const newEmail: IChangeEmail = {
        new_user_email: ''
    }

    const handleChangeEmail = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <FormWrapper method='POST' onSubmit={e => handleChangeEmail(e)}>
            <Input label='New email' onChange={e => newEmail.new_user_email = e.target.value}/>
        </FormWrapper>
    )
}

export default FormChangeEmail