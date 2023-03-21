import { urlDomain, urlSignout } from "../constants/URL";
import { logoutFetch, logoutFetchSuccess } from "../store/reducers/loginSlice";
import { AppDispatch } from "../app/providers/store-providers/config";

export const signoutUser = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(logoutFetch());
      const response = await fetch(urlDomain + urlSignout, {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token") || "",
          signature: localStorage.getItem("signature") || "",
        },
      });

      if (response.ok) {
        dispatch(logoutFetchSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };
};
