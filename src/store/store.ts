import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from '../services/PostService'
import challengesSlice from "./reducers/challengesSlice";
import dateSlice from "./reducers/dateSlice";
import errorSlice from "./reducers/errorSlice";
import loginSlice from "./reducers/loginSlice";
import modalSlice from "./reducers/modalSlice";
import popupSlice from "./reducers/popupSlice";
import settingsSlice from "./reducers/settingsSlice";
import signupSlice from "./reducers/signupSlice";

const rootReducer = combineReducers({
    login: loginSlice,
    signup: signupSlice,
    settings: settingsSlice,
    modal: modalSlice,
    challenges: challengesSlice,
    date: dateSlice,
    popup: popupSlice,
    error: errorSlice,
    [postApi.reducerPath]: postApi.reducer
})

export const setupStore = (initialState: any = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']