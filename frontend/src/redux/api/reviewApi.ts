import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import {
  IGenericResponse,
  IMyReviewCreated,
  IMyReviewFetched,
  IMyReviewUpdated,
} from './types';

const BASE_URL = import.meta.env.VITE_SERVER_ENDPOINT as string;
const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/review`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Review'],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query() {
        return {
          url: '/',
          method: 'GET',
        };
      },
    }),
    makeReview: builder.mutation<IGenericResponse, IMyReviewCreated>({
      query(data) {
        return {
          url: '/companyOrUser',
          method: 'POST',
          body: data,
        };
      },
    }),
    deleteReview: builder.mutation<IGenericResponse, String>({
      query(data) {
        return {
          url: `/${data}`,
          method: 'DELETE',
        };
      },
    }),
    updateReview: builder.mutation<IGenericResponse, IMyReviewUpdated>({
      query(data) {
        console.log(data);
        return {
          url: `${data.id}`,
          method: 'PUT',
          body: data,
        };
      },
    }),
  }),
});

export default reviewApi;

export const {
  useGetReviewsQuery,
  useMakeReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} = reviewApi;
