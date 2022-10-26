import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { setLoginStatus } from "../store/reducers/loginSlice";
import PrivateRoute from "../router/PrivateRoute";
import PublicRoute from "../router/PublicRoute";

const AppRoute: FC = () => {
  const { loginStatus } = useTypedSelector((state) => state.login);
  const dispatch = useTypedDispatch();
  localStorage.getItem("token") !== null
    ? dispatch(setLoginStatus(true))
    : dispatch(setLoginStatus(false));

  return <>{loginStatus ? <PrivateRoute /> : <PublicRoute />}</>;
};

export default AppRoute;
