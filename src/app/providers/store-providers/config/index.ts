import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from '../../../../services/PostService'
import challengesSlice from "../../../../store/reducers/challengesSlice";
import dateSlice from "../../../../store/reducers/dateSlice";
import errorSlice from "../../../../store/reducers/errorSlice";
import loginSlice from "../../../../store/reducers/loginSlice";
import modalSlice from "../../../../store/reducers/modalSlice";
import popupSlice from "../../../../store/reducers/popupSlice";
import settingsSlice from "../../../../store/reducers/settingsSlice";
import signupSlice from "../../../../store/reducers/signupSlice";

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