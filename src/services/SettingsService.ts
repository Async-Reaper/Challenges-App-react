import { urlChangePassword, urlDeleteAccount, urlDomain } from "../constants/URL"
import { IChangeEmail } from "../models/IChangeEmail"
import { IChangePassword } from "../models/IChangePassword"
import { changeEmailError, changeEmailFetch, changeEmailSuccess, changePasswordError, changePasswordFetch, changePasswordSuccess, deleteAccountFetch, deleteAccountlError, deleteAccountSuccess } from "../store/reducers/settingsSlice"
import { AppDispatch } from "../store/store"

export const changePassword = (data: IChangePassword) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(changePasswordFetch())

            const response = await fetch (urlDomain + urlChangePassword, {
                method: 'PUT',
                body: JSON.stringify(data),
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

export const changeEmail = (data: IChangeEmail) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(changeEmailFetch())

            const response = await fetch (urlDomain + urlChangePassword, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    token: localStorage.getItem('token') || '',
                    signature: localStorage.getItem('signature') || '',
                }
            })

            dispatch(changeEmailSuccess())
            
        } catch (error) {
            dispatch(changeEmailError(error))
        }
    }
}

export const deleteAccount = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(deleteAccountFetch())

            const response = await fetch (urlDomain + urlDeleteAccount, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    token: localStorage.getItem('token') || '',
                    signature: localStorage.getItem('signature') || '',
                }
            })

            dispatch(deleteAccountSuccess())
            
        } catch (error) {
            dispatch(deleteAccountlError(error))
        }
    }
}
