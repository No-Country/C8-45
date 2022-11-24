/* eslint-disable prettier/prettier */
/* eslint-disable no-empty */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../features/userSlice';
import { IGenericResponse, IUser } from './types';

const BASE_URL = import.meta.env.VITE_SERVER_ENDPOINT as string;
console.log(BASE_URL);
type RegisterUser = {
  email: string;
  name: string;
  lastName: string;
  password: string;
};
export type LoginInput = {
  email: string;
  password: string;
};
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth/`,
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
    loginUser: builder.mutation<{ token: string; user: IUser }, LoginInput>({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
