import { createSlice } from "@reduxjs/toolkit";

interface ISettingsSlice {
    loading: boolean;
    error: boolean;
    answer: string
}

const initialState: ISettingsSlice = {
    loading: false,
    error: false,
    answer: ''
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changePasswordFetch(state) {
            state.error = false;
            state.loading = true;
        },
        changePasswordSuccess(state) {
            state.loading = false;
            state.answer = 'Password changed.'
            localStorage.removeItem('token');
            localStorage.removeItem('signature');
        },
        changePasswordError(state, action) {
            state.loading = false;
            state.answer = action.payload
        },

        changeEmailFetch(state) {
            state.error = false;
            state.loading = true;
        },
        changeEmailSuccess(state) {
            state.loading = false;
            state.answer = 'Email changed.'
            localStorage.removeItem('token');
            localStorage.removeItem('signature');
        },
        changeEmailError(state, action) {
            state.loading = false;
            state.answer = action.payload
        },

        changDeleteAccountFetch(state) {
            state.error = false;
            state.loading = true;
        },
        changDeleteAccountSuccess(state) {
            state.loading = false;
            state.answer = 'Account deleted.'
            localStorage.removeItem('token');
            localStorage.removeItem('signature');
        },
        chanDeleteAccountlError(state, action) {
            state.loading = false;
            state.answer = action.payload
        }
    }
    
})

export default settingsSlice.reducer
export const { changDeleteAccountFetch, changDeleteAccountSuccess, chanDeleteAccountlError, changePasswordFetch, changePasswordSuccess, changePasswordError, changeEmailFetch, changeEmailSuccess, changeEmailError } = settingsSlice.actions