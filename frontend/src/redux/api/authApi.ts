/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGenericResponse } from './types';

import userApi from './userApi';

const BASE_URL = import.meta.env.VITE_SERVER_ENPOINT as string;
type RegisterUser = {
    email: string;
    name: string;
    lastName: string;
    password: string;
};
type LoginInput = {
    email: string;
    password: string;
};
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}auth`,
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<IGenericResponse, RegisterUser>({
            query(data) {
                return {
                    url: 'register',
                    method: 'POST',
                    body: data,
                };
            },
        }),
        loginUser: builder.mutation<
            { access_token: string; status: string },
            LoginInput>({
                query(data) {
                    return {
                        url: 'login',
                        method: 'POST',
                        body: data,
                        credentials: 'include',
                    };
                },
                async onQueryStarted(args, { dispatch, queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        await dispatch(userApi.endpoints.getCurrentUser.initiate(null));
                    } catch (error) { }
                },
            }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
