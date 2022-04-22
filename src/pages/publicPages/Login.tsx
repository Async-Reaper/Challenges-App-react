import React, { FC } from 'react'
import FormLogin from '../../components/Forms/FormLogin'
import Loader from '../../components/UI/Loader/Loader'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Login: FC = () => {
    const {loading} = useTypedSelector(state => state.login)
    return (
        <MainWrapper>
            {loading ? <Loader /> : <FormLogin />}
        </MainWrapper>
    )
}

export default Login