import { createSlice } from "@reduxjs/toolkit";
import { IUserToken } from "../../models/IUserToken";

interface ILoginSlice {
    userTokenAndSignature: IUserToken | null;
    loginStatus: boolean;
    loading: boolean;
    error: boolean;
    answer: string
}

const initialState: ILoginSlice = {
    userTokenAndSignature: null,
    loginStatus: true,
    loading: false,
    error: false,
    answer: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginFetch(state) {
            state.loading = true;
        },
        loginFetchSuccess(state, action) {
            state.loading = false;
            state.userTokenAndSignature = action.payload;
            state.loginStatus = true;
            state.error = false;
        },
        loginFetchError(state, action) {
            state.loading = false;
            state.error = true;
            state.answer = action.payload
        }
    }
})

export default loginSlice.reducer
export const {loginFetch, loginFetchError, loginFetchSuccess} = loginSlice.actions