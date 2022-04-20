import { TextField } from '@mui/material'
import React, { FC } from 'react'

interface InputProps {
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({label, onChange}) => {
    return (
        <TextField label={label} variant="filled" margin='normal' onChange={onChange}/>
    )
}

export default Input