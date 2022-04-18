import React, { FC } from 'react'
import PrivateRoute from '../routes/PrivateRoute'
import PublicRoute from '../routes/PublicRoute'

const AppRoute: FC = () => {
    const b: boolean = false

    return (
        <>
            {b ? <PrivateRoute /> : <PublicRoute />}
        </>
    )
}

export default AppRoute