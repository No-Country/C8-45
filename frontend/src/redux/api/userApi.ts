/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../features/userSlice';
import { IUser } from './types';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getCurrentUser: builder.query<IUser, null>({
            query() {
                return {
                    url: 'user',
                    credentials: 'include',
                };
            },
            transformResponse: (result: { data: { user: IUser } }) =>
                result.data.user,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data));
                    // eslint-disable-next-line no-empty
                } catch (error) { }
            },
        }),
    }),
});

export default userApi;