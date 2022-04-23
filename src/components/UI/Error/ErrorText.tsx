import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const Error = styled('span')({
    color: '#e50000'
})

const ErrorText: FC = () => {
    const {errorText} = useTypedSelector(state => state.error)
    return (
        <Error>
            <ErrorOutlineOutlinedIcon />
            {errorText}
        </Error>
    )
}

export default ErrorText