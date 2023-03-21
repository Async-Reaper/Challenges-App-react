import { urlChangeEmail, urlChangePassword, urlDeleteAccount, urlDomain } from "../constants/URL";
import { IChangeEmail } from "../models/IChangeEmail";
import { IChangePassword } from "../models/IChangePassword";
import { logoutFetchSuccess } from "../store/reducers/loginSlice";
import { openPopup } from "../store/reducers/popupSlice";
import {
  changeEmailError,
  changeEmailFetch,
  changeEmailSuccess,
  changePasswordError,
  changePasswordFetch,
  changePasswordSuccess,
  deleteAccountFetch,
  deleteAccountlError,
  deleteAccountSuccess,
} from "../store/reducers/settingsSlice";
import { AppDispatch } from "../app/providers/store-providers/config";

export const changePassword = (data: IChangePassword) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(changePasswordFetch());

      const response = await fetch(urlDomain + urlChangePassword, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token") || "",
          signature: localStorage.getItem("signature") || "",
        },
      });
      if (response.ok) {
        dispatch(changePasswordSuccess());
        dispatch(logoutFetchSuccess());
        dispatch(openPopup("Password changed."));
      } else {
        dispatch(changePasswordError("An error ocurred, please try again."));
      }
    } catch (error) {
      dispatch(changePasswordError(error));
    }
  };
};

export const changeEmail = (data: IChangeEmail) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(changeEmailFetch());

      const response = await fetch(urlDomain + urlChangeEmail, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token") || "",
          signature: localStorage.getItem("signature") || "",
        },
      });

      if (response.ok) {
        dispatch(changeEmailSuccess());
        dispatch(logoutFetchSuccess());
        dispatch(openPopup("Email changed."));
      } else {
        dispatch(changeEmailError("An error ocurred, please try again."));
      }
    } catch (error) {
      dispatch(changeEmailError(error));
    }
  };
};

export const deleteAccount = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(deleteAccountFetch());

      const response = await fetch(urlDomain + urlDeleteAccount, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token") || "",
          signature: localStorage.getItem("signature") || "",
        },
      });

      if (response.ok) {
        dispatch(deleteAccountSuccess());
        dispatch(logoutFetchSuccess());
        dispatch(openPopup("Account deleted."));
      } else {
        dispatch(deleteAccountlError("An error ocurred, please try again."));
      }
    } catch (error) {
      dispatch(deleteAccountlError(error));
    }
  };
};
