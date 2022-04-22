import React, { FC } from 'react'
import FormSignup from '../../components/Forms/FormSignup'
import Loader from '../../components/UI/Loader/Loader'
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper'
import Popup from '../../components/UI/Popup/Popup'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Signup: FC = () => {
    const {loading, message} = useTypedSelector(state => state.signup)
    return (
        <MainWrapper>
            <Popup />
            {loading ? <Loader /> : <FormSignup />}
        </MainWrapper>
    )
}

export default Signup