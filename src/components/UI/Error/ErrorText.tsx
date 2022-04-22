import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const ErrorText: FC = () => {
    const {errorText} = useTypedSelector(state => state.error)
    return (
        <span>{errorText}</span>
    )
}

export default ErrorText