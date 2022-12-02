/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, ICompany } from '../api/types';
import { RootState } from '../store';

interface IUserState {
  user: IUser | ICompany | null;
  token: string | null;
}

const initialState: IUserState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    logOut: (state) => {
      localStorage.removeItem('auth_token');
      state.token = null;
      state.user = null;
    },
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: IUser | null; token: string | null }>
    ) => {
      state.user = user;
      state.token = token;
    },
    setCompanyCredentials: (
      state,
      {
        payload: { company, token },
      }: PayloadAction<{ company: ICompany | null; token: string | null }>
    ) => {
      state.user = company;
      state.token = token;
    },
  },
});

export default userSlice.reducer;

export const { setCredentials, logOut, setCompanyCredentials } = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
