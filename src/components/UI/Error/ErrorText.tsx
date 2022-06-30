import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Error = styled('span')({
    maxWidth: 282,
    color: '#f50057',
    fontSize: 15
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