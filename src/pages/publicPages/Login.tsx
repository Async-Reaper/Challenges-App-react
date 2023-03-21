import React, { FC } from "react";
import FormLogin from "../../components/Forms/FormLogin";
import Loader from "../../shared/ui/Loader/Loader";
import MainWrapper from "../../shared/ui/MainWrapper/MainWrapper";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import PopupError from "../../shared/ui/Popup/PopupError";

const Login: FC = () => {
  const { loading } = useTypedSelector((state) => state.login);
  return (
    <MainWrapper dataTestid="login-page">
      <PopupError />
      {loading ? <Loader /> : <FormLogin />}
    </MainWrapper>
  );
};

export default Login;
