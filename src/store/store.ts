import { combineReducers, configureStore } from "@reduxjs/toolkit";
import challengesReducer from "./reducers/challengesReducer";


const rootReducer = combineReducers({
    challenge: challengesReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']