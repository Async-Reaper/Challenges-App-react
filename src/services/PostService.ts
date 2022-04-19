import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IChallenge } from '../models/IChallenge'


export const challenges = createApi({
    reducerPath: 'challenges',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://bahbka.pythonanywhere.com/'}),
    tagTypes: ['Challenge'],
    endpoints: (build) => ({
        getAllChallenges: build.query<IChallenge[], IChallenge>({
            query: () => ({
                url: 'challenge/get_challenges_list/',
            }),
            providesTags: res => ['Challenge']
        })
    })
})