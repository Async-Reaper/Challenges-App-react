import React, { FC } from "react";
import FormChangeEmail from "../Forms/FormChangeEmail";
import FormChangePassword from "../Forms/FormChangePassword";
import FormDeleteAccount from "../Forms/FormDeleteAccount";
import AccordionSettings from "../UI/Accordion/AccordionSettings";

const SettingsAccordion: FC = () => {
  return (
    <>
      <AccordionSettings
        name="Change password"
        params={<FormChangePassword />}
      />
      <AccordionSettings name="Change email" params={<FormChangeEmail />} />
      <AccordionSettings name="Delete account" params={<FormDeleteAccount />} />
    </>
  );
};

export default SettingsAccordion;
