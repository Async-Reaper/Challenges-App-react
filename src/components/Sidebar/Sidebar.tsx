import styled from '@emotion/styled'
import React, { FC } from 'react'

const Aside = styled('aside')({
    display: 'flex',
    justifyContent: 'space-between',
    width:' 170px',
    height:' 100vh',
    color: '#1c1c1c',
    background: '#0C53A6',
    padding:' 20px',
    boxShadow: '0px 0px 10px #0c53a6',
})

const Sidebar: FC = () => {
    return (
        <Aside>
            <div>login</div>
            <div>signup</div>
        </Aside>
    )
}

export default Sidebar