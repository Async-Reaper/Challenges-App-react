import React, { FC } from "react";
import FormSignup from "../../components/Forms/FormSignup";
import Loader from "../../shared/ui/Loader/Loader";
import MainWrapper from "../../shared/ui/MainWrapper/MainWrapper";
import Popup from "../../shared/ui/Popup/Popup";
import PopupError from "../../shared/ui/Popup/PopupError";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Signup: FC = () => {
  const { loading, message } = useTypedSelector((state) => state.signup);
  return (
    <MainWrapper dataTestid="signup-page">
      <Popup />
      <PopupError />
      {loading ? <Loader /> : <FormSignup />}
    </MainWrapper>
  );
};

export default Signup;
