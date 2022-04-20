import { createSlice } from "@reduxjs/toolkit";

interface SignupSlice {
    loading: boolean;
    error: boolean;
    message: string
}

const initialState: SignupSlice = {
    loading: false,
    error: false,
    message: ''
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signupFetch (state) {
            state.loading = true
        },
        signupFetchSuccess (state, action) {
            state.loading = false
            state.error = false
            state.message = action.payload
        },
        signupFetchError (state, action) {
            state.loading = false
            state.error = true
            state.message = action.payload
        }
    }
})

export default signupSlice.reducer
export const { signupFetch, signupFetchSuccess, signupFetchError } = signupSlice.actions
