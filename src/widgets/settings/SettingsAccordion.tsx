import React, { FC } from "react";
import FormChangeEmail from "../../components/Forms/FormChangeEmail";
import FormChangePassword from "../../components/Forms/FormChangePassword";
import FormDeleteAccount from "../../components/Forms/FormDeleteAccount";
import AccordionSettings from "../../shared/ui/Accordion/AccordionSettings";

const SettingsAccordion: FC = () => {
  return (
    <>
      <AccordionSettings name="Change password" params={<FormChangePassword />} />
      <AccordionSettings name="Change email" params={<FormChangeEmail />} />
      <AccordionSettings name="Delete account" params={<FormDeleteAccount />} />
    </>
  );
};

export default SettingsAccordion;
