import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from '../services/PostService'
import inputSlice from "./reducers/inputSlice";
import loginSlice from "./reducers/loginSlice";
import signupSlice from "./reducers/signupSlice";

const rootReducer = combineReducers({
    login: loginSlice,
    signup: signupSlice,
    input: inputSlice,
    [postApi.reducerPath]: postApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']