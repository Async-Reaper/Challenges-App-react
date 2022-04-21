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
        },
        changeEmailError(state, action) {
            state.loading = false;
            state.answer = action.payload
        },

        deleteAccountFetch(state) {
            state.error = false;
            state.loading = true;
        },
        deleteAccountSuccess(state) {
            state.loading = false;
            state.answer = 'Account deleted.'
        },
        deleteAccountlError(state, action) {
            state.loading = false;
            state.answer = action.payload
        }
    }
    
})

export default settingsSlice.reducer
export const { deleteAccountFetch, deleteAccountSuccess, deleteAccountlError, changePasswordFetch, changePasswordSuccess, changePasswordError, changeEmailFetch, changeEmailSuccess, changeEmailError } = settingsSlice.actions