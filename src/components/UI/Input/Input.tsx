import { TextField } from '@mui/material'
import React, { FC } from 'react'

interface InputProps {
    label: string
    type? : string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({label, onChange, type}) => {
    return (
        <TextField label={label} type={type} variant="filled" margin='normal' onChange={onChange}/>
    )
}

export default Input