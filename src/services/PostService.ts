import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IChallenge } from '../models/IChallenge'


export const postApi = createApi({
    reducerPath: 'getAllChallenges',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://bahbka.pythonanywhere.com/'}),
    tagTypes: ['Challenge'],
    endpoints: (build) => ({
        getAllChallenges: build.query<IChallenge[], string>({
            query: () => ({
                url: 'challenges/get_challenges_list/',
            }),
            providesTags: res => ['Challenge']
        })
    })
})