import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from 'consts/api';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  keepUnusedDataFor: 10,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Control-Allow-Origin', '*');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllGames: build.query({
      query: (params) => ({
        url: `games`,
        params,
      }),
    }),
  }),
});

export const { useGetAllGamesQuery } = gamesApi;
