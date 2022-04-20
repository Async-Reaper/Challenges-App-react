import { AppDispatch } from "../store/store"
import { logoutFetch, logoutFetchSuccess } from "../store/reducers/loginSlice"
import { urlDomain, urlSignout } from "../constants/URL"
import { IUserToken } from "../models/IUserToken"


export const signoutUser = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(logoutFetch())
            const response = await fetch(urlDomain + urlSignout, {
                method: 'GET',
                headers: {
                    token: JSON.parse(localStorage.getItem('token') || ''),
                    signature: JSON.parse(localStorage.getItem('signature') || ''),
                }
            })

            if (response.ok) dispatch(logoutFetchSuccess())
        } catch (error) {
            
        }
    }
}