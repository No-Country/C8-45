import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../features/userSlice';
import { RootState } from '../store';
import { IUser, IMyReview } from './types';

const BASE_URL = import.meta.env.VITE_SERVER_ENDPOINT as string;
const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<IUser, null>({
      query() {
        return {
          url: 'user/me',
          method: 'GET',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setCredentials({
              user: data,
              token: localStorage.getItem('auth_token'),
            })
          );
        } catch (error) {}
      },
    }),
    getMyReviews: builder.query<IMyReview, null>({
      query(data) {
        return {
          url: 'review/me',
          method: 'GET',
          body: data,
        };
      },
    }),
  }),
});
export default userApi;
