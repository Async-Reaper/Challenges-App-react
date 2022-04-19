import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IChallenge } from '../models/IChallenge'
import { urlDomain, urlGetChallenges } from '../constants/URL'

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
        })
    })
})