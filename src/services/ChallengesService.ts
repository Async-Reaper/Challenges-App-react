import { urlCreateChallenge, urlDomain } from "../constants/URL";
import { ICreateChallenge } from "../models/ICreateChallenge";
import { createChalleneError, createChallengeFetch, createChallengeSuccess } from "../store/reducers/challengesSlice";
import { AppDispatch } from "../store/store";
import { setStatusModal } from '../store/reducers/modalSlice'

export const createChallenge = (data: ICreateChallenge) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(createChallengeFetch());

            const response = await fetch(urlDomain + urlCreateChallenge, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    token: localStorage.getItem('token') || '',
                    signature: localStorage.getItem('signature') || '',
                },
                body: JSON.stringify(data)
            });

            if(response.ok) {
                dispatch(createChallengeSuccess())
                dispatch(setStatusModal(false))
            } else {
                const res = await response.json()
                dispatch(createChalleneError(res))
            }
        } catch (error) {
            dispatch(createChalleneError(error))
        }
    }
}