import React, { FC } from 'react';
import AccordionSettings from '../../components/UI/Accordion/AccordionSettings';
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper';
import Login from '../publicPages/Login';

const Settings: FC = () => {
    return (
        <MainWrapper>
            <AccordionSettings name='Change password' params={<Login />}/>
            
        </MainWrapper>
    )
}

export default Settings