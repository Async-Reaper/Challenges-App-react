import { urlChangePassword, urlDomain } from "../constants/URL"
import { IChangePassword } from "../models/IChangePassword"
import { changePasswordError, changePasswordFetch, changePasswordSuccess } from "../store/reducers/settingsSlice"
import { AppDispatch } from "../store/store"

export const changePassword = (data: IChangePassword) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(changePasswordFetch())

            const response = await fetch (urlDomain + urlChangePassword, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    token: localStorage.getItem('token') || '',
                    signature: localStorage.getItem('signature') || '',
                }
            })

            dispatch(changePasswordSuccess())
            
        } catch (error) {
            dispatch(changePasswordError(error))
        }
    }
}