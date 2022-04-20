import { createSlice } from "@reduxjs/toolkit";

interface InputSlice {
    text: string
}

const initialState: InputSlice = {
    text: ''
}
const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        inputChange(state, action) {
            state.text = action.payload
        }
    }
})

export default inputSlice.reducer;
export const { inputChange } = inputSlice.actions