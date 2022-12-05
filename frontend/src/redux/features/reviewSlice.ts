/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import { IReview } from '../api/types';

const initialState = [] as IReview[]

export const reviewSlice = createSlice({
  initialState,
  name: 'review',
  reducers: {
    getReviews: (state, params) => {
      const { payload } = params;
      state = payload;
    },
    getCompanyReviews: (state, params) => {
      const { payload } = params;
      state = payload;
    },
  },
});

export default reviewSlice.reducer;

export const { getReviews, getCompanyReviews } = reviewSlice.actions;
