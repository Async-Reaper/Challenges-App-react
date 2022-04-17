import styled from '@emotion/styled'
import React, { FC } from 'react'

interface MainProps {
    children: any
}

const Main = styled('main')({
    margin: '0 auto',
    padding: 20,
})

const MainWrapper: FC<MainProps> = ({children}) => {
    return (
        <Main>{children}</Main>
    )
}

export default MainWrapper