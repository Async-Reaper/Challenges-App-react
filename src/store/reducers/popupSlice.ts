import { createSlice } from "@reduxjs/toolkit";

interface IPopupSlice {
    popupStatus: boolean;
}

const initialState: IPopupSlice = {
    popupStatus: false
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setStatusPopup(state, action) {
            state.popupStatus = action.payload
        }
    }
})

export default popupSlice.reducer
export const {setStatusPopup} = popupSlice.actions