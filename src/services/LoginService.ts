import { urlDomain, urlLogin } from "../constants/URL"
import { IUserLogin } from "../models/IUserLogin"
import { loginFetch, loginFetchError, loginFetchSuccess } from "../store/reducers/loginSlice"
import { AppDispatch } from "../store/store"
import { IUserToken } from "../models/IUserToken"
import { openErrorPopup } from '../store/reducers/errorSlice'

export const loginUser = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(loginFetch());

            const response = await fetch(urlDomain + urlLogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            });

            if(response.ok) {
                const res: IUserToken = await response.json()
                dispatch(loginFetchSuccess(res))
                localStorage.setItem('userName', data.username)
                localStorage.setItem('token', res.token)
                localStorage.setItem('signature', res.signature)
            } else {
                const res = await response.json()
                dispatch(openErrorPopup(res.message))
                dispatch(loginFetchError(res))
            }
        } catch (error) {
            dispatch(loginFetchError(error))
        }
    }
}

