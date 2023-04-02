import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ArtistsType {
  url: string;
  artist: { alias: string; id: number; adamid: number };
}

export interface ChartType {
  key: number;
  title: string;
  subtitle: string;
  artists: ArtistsType[];
  images: { background: string; coverart: string };
}
export type ChartsResponse = ChartType[];
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', '3e79000140msh52753c523d8122ep1a0fb6jsn69182fff8292');
      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query<ChartsResponse, any>({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
