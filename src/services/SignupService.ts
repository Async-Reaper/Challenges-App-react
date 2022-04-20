import { AppDispatch } from "../store/store"
import { IUserSignup } from "../models/IUserSignup"
import { signupFetch, signupFetchError, signupFetchSuccess } from "../store/reducers/signupSlice"
import { urlDomain, urlSignup } from "../constants/URL"
import { ISignupAnswer } from "../models/ISingupAnswer"


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
            console.log(data)
            const res: ISignupAnswer = await response.json();
            dispatch(signupFetchSuccess(res.message))
        } catch (error) {
            dispatch(signupFetchError('error'))
        }
    }
}