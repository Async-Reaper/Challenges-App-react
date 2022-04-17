import styled from '@emotion/styled'
import React, { FC } from 'react'

const AsidePublic = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
})

const SidebarPublic: FC = () => {
    return (
        <AsidePublic>
            <div>login</div>
            <div>signup</div>
        </AsidePublic>
    )
}

export default SidebarPublic