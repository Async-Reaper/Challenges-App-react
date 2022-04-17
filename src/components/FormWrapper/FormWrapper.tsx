import styled from '@emotion/styled'
import React, { FC } from 'react'

interface FormProps {
    children: any
}

const Form = styled('form')({
    background: '#0C53A6',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    borderRadius: 10,
})

const FormWrapper: FC<FormProps> = ({children}) => {
    return (
        <Form>{children}</Form>
    )
}

export default FormWrapper