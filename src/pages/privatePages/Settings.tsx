import React, { FC } from "react";
import SettingsAccordion from "../../widgets/settings/SettingsAccordion";
import Loader from "../../shared/ui/Loader/Loader";
import MainWrapper from "../../shared/ui/MainWrapper/MainWrapper";
import Popup from "../../shared/ui/Popup/Popup";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Settings: FC = () => {
  const { loading } = useTypedSelector((state) => state.settings);
  return (
    <MainWrapper dataTestid="settings-page">
      <Popup />
      {loading ? <Loader /> : <SettingsAccordion />}
    </MainWrapper>
  );
};

export default Settings;
