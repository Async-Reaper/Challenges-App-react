import React, { FC } from 'react'

interface FormProps {
    children: any
}

const FormWrapper: FC<FormProps> = ({children}) => {
    return (
        <form>{children}</form>
    )
}

export default FormWrapper