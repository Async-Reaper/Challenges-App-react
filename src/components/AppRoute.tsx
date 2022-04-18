import React, { FC } from 'react'
import PrivateRoute from '../router/PrivateRoute'
import PublicRoute from '../router/PublicRoute'

const AppRoute: FC = () => {
    const b: boolean = false

    return (
        <>
            {b ? <PrivateRoute /> : <PublicRoute />}
        </>
    )
}

export default AppRoute