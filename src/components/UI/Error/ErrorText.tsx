import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Error = styled('span')({
    color: '#e50000',
    fontWeight: 300
})

interface IError {
    children: string
}

const ErrorText: FC<IError> = ({children}) => {
    return (
        <Error>
            *{children}
        </Error>
    )
}

export default ErrorText