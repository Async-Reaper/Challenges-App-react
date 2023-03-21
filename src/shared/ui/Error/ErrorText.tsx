import React, {FC} from 'react'
import {Error} from "./ErrorText.style";
import {IErrorProps} from "./ErrorText.types";

const ErrorText: FC<IErrorProps> = ({children}) => {
    return (
        <Error>
            *{children}
        </Error>
    )
}

export default ErrorText