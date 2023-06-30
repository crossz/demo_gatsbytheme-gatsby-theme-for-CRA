import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// NOTE: for `gatsby build`, the env variables' fetching is ignored here.
const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://127.0.0.1:5001/'
    : process.env.GATSBY_APP_SERVER_URL

    
console.log(`GATSBY_ENV: ${process.env.GATSBY_ENV}`)
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`GATSBY_APP_SERVER_URL: ${process.env.GATSBY_APP_SERVER_URL}`)

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: () => ({
        url: 'api/user/profile',
        method: 'GET',
      }),
    }),
  }),
})

// export react hook
export const { useGetUserDetailsQuery } = authApi
