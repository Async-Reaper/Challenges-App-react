import { createSlice } from "@reduxjs/toolkit";

interface IModalSlice {
    modalStatus: boolean
}

const initialState: IModalSlice = {
    modalStatus: false
}

const modalSlice = createSlice({
    name: 'modal window',
    initialState,
    reducers: {
        setStatusModal (state, action) {
            state.modalStatus = action.payload
        }
    }
})

export default modalSlice.reducer
export const { setStatusModal } = modalSlice.actions