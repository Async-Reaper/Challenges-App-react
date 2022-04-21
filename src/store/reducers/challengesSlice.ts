import { createSlice } from "@reduxjs/toolkit";

interface IChallengesSlice {
    loading: boolean;
    error: boolean;
    answer: string
}

const initialState: IChallengesSlice = {
    loading: false,
    error: false,
    answer: ''
}

const challengesSlice = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
        createChallengeFetch(state) {
            state.loading = true
            state.error = false
        },
        createChallengeSuccess(state) {
            state.loading = false;
            state.answer = 'Challenge created.'
        },
        createChalleneError(state, action) {
            state.loading = false,
            state.answer = action.payload
        }
    }
})

export default challengesSlice.reducer
export const {createChallengeFetch, createChallengeSuccess, createChalleneError} = challengesSlice.actions