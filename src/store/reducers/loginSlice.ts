import { createSlice } from "@reduxjs/toolkit";
import { IUserLogin } from "../../models/IUserLogin";
import { IUserToken } from "../../models/IUserToken";

interface ILoginSlice {
    userTokenAndSignature: IUserToken | null;
    loading: boolean;
    error: boolean;
    answer: string
}

const initialState: ILoginSlice = {
    userTokenAndSignature: null,
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
            state.error = false;
        },
        loginFetchError(state, action) {
            state.loading = false;
            state.error = true;
            state.answer = action.payload
        }
    }
})