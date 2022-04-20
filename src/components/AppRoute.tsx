import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import PrivateRoute from '../router/PrivateRoute'
import PublicRoute from '../router/PublicRoute'

const AppRoute: FC = () => {
    const {loginStatus} = useTypedSelector(state => state.login)

    
    return (
        <>
            {loginStatus ? <PrivateRoute /> : <PublicRoute />}
        </>
    )
}

export default AppRoute