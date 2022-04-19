import { createSlice } from "@reduxjs/toolkit";
import { IChallenge } from "../../models/IChallenge";

interface IChallengeState {
    challenges: IChallenge[];
    loading: boolean;
    error: boolean;
    answer: string
}

const initialState: IChallengeState = {
    challenges: [],
    loading: false,
    error: false,
    answer: ''
}

const challengeReducer = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
        getChallengeFetch(state) {
            state.loading = true
        },
        getChallengeSuccess(state, action) {
            state.loading = false;
            state.challenges = action.payload
            state.error = false
        },
        getChallengeError(state, action) {
            state.loading = false;
            state.error = true;
            state.answer = action.payload
        }
    }
})

export default challengeReducer.reducer;
export const { getChallengeFetch, getChallengeSuccess, getChallengeError } = challengeReducer.actions