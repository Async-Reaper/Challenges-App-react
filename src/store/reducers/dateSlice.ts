import { currentDate } from '../../constants/Date'
import { createSlice } from "@reduxjs/toolkit";
import { dateService } from '../../helpers/dateHelper'

interface DateSlice {
    date: string
}
const initialState: DateSlice = {
    date: currentDate
}

const dateSlice = createSlice({
    name: 'Date',
    initialState,
    reducers: {
        setDate(state, action) {
            state.date = dateService(action.payload)
        }
    }
})

export default dateSlice.reducer
export const { setDate } = dateSlice.actions