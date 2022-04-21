import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IChallenge } from '../models/IChallenge'
import { urlDomain, urlGetChallengeById, urlGetChallengeMembers, urlGetChallenges } from '../constants/URL'
import { IChallengeDetails } from '../models/IChallengeDetail'
import { IChallengeMember } from '../models/IChallengeMembers'

export const postApi = createApi({
    reducerPath: 'getAllChallenges',
    baseQuery: fetchBaseQuery({ baseUrl: urlDomain}),
    tagTypes: ['Challenge'],
    endpoints: (build) => ({
        getAllChallenges: build.query<IChallenge[], string>({
            query: () => ({
                url: urlGetChallenges,
            }),
            providesTags: res => ['Challenge']
        }),
        getChallengeById: build.query<IChallengeDetails, string>({
            query: (id: string) => ({
                url: urlGetChallengeById + id,
                headers: {
                    token: localStorage.getItem('token') || '',
                    signature: localStorage.getItem('signature') || '',
                    'Content-Type': 'application/json',
                }
            }),
        }),
        getChallengeMembers: build.query<IChallengeMember[], string>({
            query: (id: string) => ({
                url: urlGetChallengeMembers + id,
                headers: {
                    token: localStorage.getItem('token') || '',
                    signature: localStorage.getItem('signature') || '',
                    'Content-Type': 'application/json',
                }
            }),
            providesTags: res => ['Challenge']
        }) 
    })
})