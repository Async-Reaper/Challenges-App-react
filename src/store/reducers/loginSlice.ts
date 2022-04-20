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
    loginStatus: false,
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
            state.error = false;
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
            state.answer = action.payload;
        },
        setLoginStatus(state, action) {
            state.loginStatus = action.payload;
        },
        logoutFetch(state) {
            state.loading = true;
            state.error = false;
        },
        logoutFetchSuccess(state) {
            state.loading = false;
            state.loginStatus = false;
            localStorage.removeItem('token');
            localStorage.removeItem('signature');
        }
    }
})

export default loginSlice.reducer
export const {setLoginStatus, loginFetch, loginFetchError, loginFetchSuccess, logoutFetch, logoutFetchSuccess} = loginSlice.actions