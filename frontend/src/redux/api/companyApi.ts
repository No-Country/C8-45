import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const BASE_URL = import.meta.env.VITE_SERVER_ENDPOINT as string;
const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/company`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Company'],
  endpoints: (builder) => ({
    getCompany: builder.query({
      query() {
        return {
          url: '/',
          method: 'GET',
        };
      },
    }),
  }),
});

export default companyApi;

export const { useGetCompanyQuery } = companyApi;
