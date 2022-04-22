import { AppDispatch } from "../store/store"
import { IUserSignup } from "../models/IUserSignup"
import { signupFetch, signupFetchError, signupFetchSuccess } from "../store/reducers/signupSlice"
import { urlDomain, urlSignup } from "../constants/URL"
import { ISignupAnswer } from "../models/ISingupAnswer"
import { openPopup } from "../store/reducers/popupSlice"
import { openErrorPopup } from '../store/reducers/errorSlice'


export const signupUser = (data: IUserSignup) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(signupFetch())
            
            const response = await fetch( urlDomain + urlSignup, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                const res: ISignupAnswer = await response.json();
                dispatch(signupFetchSuccess(res.message))
                dispatch(openPopup(res.message))
            } else {
                const res = await response.json()
                dispatch(openErrorPopup(res.message))
            }
        } catch (error) {
            dispatch(signupFetchError('error'))
        }
    }
}