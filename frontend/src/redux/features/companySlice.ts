/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import { ICompany, IReview } from '../api/types';

const initialState = {} as ICompany;

export const companySlice = createSlice({
  initialState,
  name: 'company',
  reducers: {
    getCompany: (state, params) => {
      const { payload } = params;
      state = payload;
    }
  },
});

export default companySlice.reducer;

export const { getCompany } = companySlice.actions;
