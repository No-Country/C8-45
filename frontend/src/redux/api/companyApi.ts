import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { ICompanyUpdate, IGenericResponse } from './types';

const BASE_URL = import.meta.env.VITE_SERVER_ENDPOINT as string;
const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
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
          url: '/company',
          method: 'GET',
        };
      },
    }),
    getCompanyReviews: builder.query({
      query() {
        return {
          url: '/review/company',
          method: 'GET',
        };
      },
    }),
    getCompanyByID: builder.query({
      query(id) {
        return {
          url: `/company/${id}`,
          method: 'GET',
        };
      },
    }),
    updateCompany: builder.mutation<IGenericResponse, ICompanyUpdate>({
      query(data) {
        return {
          url: '/company',
          method: 'PUT',
          body: data,
        };
      },
    }),
    deleteCompany: builder.mutation<IGenericResponse, null>({
      query() {
        return {
          url: '/company',
          method: 'DELETE',
        };
      },
    }),
  }),
});

export default companyApi;

export const {
  useGetCompanyQuery,
  useGetCompanyReviewsQuery,
  useGetCompanyByIDQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
