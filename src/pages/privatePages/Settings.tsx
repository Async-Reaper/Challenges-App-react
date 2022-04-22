import React, { FC } from 'react';
import SettingsAccordion from '../../components/Settings/SettingsAccordion';
import Loader from '../../components/UI/Loader/Loader';
import MainWrapper from '../../components/UI/MainWrapper/MainWrapper';
import Popup from '../../components/UI/Popup/Popup';
import PopupError from '../../components/UI/Popup/PopupError'
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Settings: FC = () => {
    const {loading, answer} = useTypedSelector(state => state.settings)
    return (
        <MainWrapper>
            <Popup />
            {loading ? <Loader /> : <SettingsAccordion />}
        </MainWrapper>
    )
}

export default Settings