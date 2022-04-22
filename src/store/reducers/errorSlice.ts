import { createSlice } from "@reduxjs/toolkit";

interface IErrorSlice {
    errorStatus: boolean;
    errorText: string;
}

const initialState: IErrorSlice = {
    errorStatus: false,
    errorText: ''
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        openErrorPopup(state, action) {
            state.errorStatus = true;
            state.errorText = action.payload
        },
        closeErrorPopup(state) {
            state.errorStatus = false
        },
        errorForm(state, action) {
            state.errorText = action.payload
        }
    }
})

export default errorSlice.reducer
export const { closeErrorPopup, openErrorPopup, errorForm } = errorSlice.actions