import { createSlice } from "@reduxjs/toolkit";

interface IPopupSlice {
    popupStatus: boolean;
    popupText: string
}

const initialState: IPopupSlice = {
    popupStatus: false,
    popupText: ''
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        closePopup(state) {
            state.popupStatus = false
        },
        openPopup(state, action) {
            state.popupStatus = true
            state.popupText = action.payload
        }
    }
})

export default popupSlice.reducer
export const {closePopup, openPopup} = popupSlice.actions