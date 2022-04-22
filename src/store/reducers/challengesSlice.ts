import { createSlice } from "@reduxjs/toolkit";

interface IChallengesSlice {
    loading: boolean;
    error: boolean;
    answer: string;
    acceptStatus: boolean
}

const initialState: IChallengesSlice = {
    loading: false,
    error: false,
    answer: '',
    acceptStatus: false
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
            state.loading = false;
            state.answer = action.payload
        },

        acceptChallengeFetch(state) {
            state.loading = true
            state.error = false
        },
        acceptChallengeSuccess(state) {
            state.loading = false;
            state.acceptStatus = true;
            state.answer = 'You took part in the challenge.'
        },
        acceptChalleneError(state, action) {
            state.loading = false;
            state.answer = action.payload
        },
        setAcceptStatus (state, action) {
            state.acceptStatus = action.payload
        }
    }
})

export default challengesSlice.reducer
export const { setAcceptStatus, acceptChallengeFetch, acceptChallengeSuccess, acceptChalleneError, createChallengeFetch, createChallengeSuccess, createChalleneError} = challengesSlice.actions