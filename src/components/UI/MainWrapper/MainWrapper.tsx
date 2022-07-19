import styled from '@emotion/styled'
import React, { FC } from 'react'

interface MainProps {
    children: any
    dataTestid?: string
}

const Main = styled('main')({
    margin: '0 auto',
    padding: 20,
})

const MainWrapper: FC<MainProps> = ({ children, dataTestid }) => {
    return (
        <Main data-testid={dataTestid}>{children}</Main>
    )
}

export default MainWrapper