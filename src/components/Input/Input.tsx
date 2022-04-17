import { TextField } from '@mui/material'
import React, { FC } from 'react'

interface InputProps {
    label: string
}

const Input: FC<InputProps> = ({label}) => {
    return (
        <TextField label={label} variant="filled" margin='normal' />
    )
}

export default Input