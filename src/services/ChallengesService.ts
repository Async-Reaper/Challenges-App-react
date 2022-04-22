import { urlAcceptChallenge, urlCreateChallenge, urlDomain } from "../constants/URL";
import { ICreateChallenge } from "../models/ICreateChallenge";
import { acceptChalleneError, acceptChallengeFetch, acceptChallengeSuccess, createChalleneError, createChallengeFetch, createChallengeSuccess } from "../store/reducers/challengesSlice";
import { AppDispatch } from "../store/store";
import { setStatusModal } from '../store/reducers/modalSlice'
import { openPopup } from '../store/reducers/popupSlice'
import { openErrorPopup } from '../store/reducers/errorSlice'

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
                dispatch(openPopup('Challenge created.'))
                dispatch(setStatusModal(false))
            } else {
                const res = await response.json()
                dispatch(createChalleneError(res.message))
                dispatch(openErrorPopup(res.message))
            }
        } catch (error) {
            dispatch(createChalleneError(error))
        }
    }
}

export const acceptChallenge = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(acceptChallengeFetch());

            const response = await fetch(urlDomain + urlAcceptChallenge + id, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    token: localStorage.getItem('token') || '',
                    signature: localStorage.getItem('signature') || '',
                },
            });

            if(response.ok) {
                dispatch(acceptChallengeSuccess())
                dispatch(openPopup('You took part in the challenge.'))
            } else {
                const res = await response.json()
                dispatch(openErrorPopup(res.message))
            }
        } catch (error) {
            dispatch(acceptChalleneError(error))
        }
    }
}