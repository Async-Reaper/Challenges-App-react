import React, { FC } from 'react';
import FormChangeEmail from '../../components/Forms/FormChangeEmail';
import FormChangePassword from '../../components/Forms/FormChangePassword';
import AccordionSettings from '../../components/UI/Accordion/AccordionSettings';
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper';

const Settings: FC = () => {
    return (
        <MainWrapper>
            <AccordionSettings name='Change password' params={<FormChangePassword />}/>
            <AccordionSettings name='Change email' params={<FormChangeEmail />}/>
        </MainWrapper>
    )
}

export default Settings