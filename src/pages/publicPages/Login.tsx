import React, { FC } from 'react'
import FormLogin from '../../components/Forms/FormLogin'
import Loader from '../../components/UI/Loader/Loader'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import PopupError from '../../components/UI/Popup/PopupError'

const Login: FC = () => {
    const { loading } = useTypedSelector(state => state.login)
    return (
        <MainWrapper dataTestid='login-page'>
            <PopupError />
            {loading ? <Loader /> : <FormLogin />}
        </MainWrapper>
    )
}

export default Login