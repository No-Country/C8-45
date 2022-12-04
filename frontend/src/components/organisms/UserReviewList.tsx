import React from 'react';
import { IMyReview } from '../../redux/api/types';
import ReviewCard from '../atoms/ReviewCard';

const UserReviewList = (props: Props) => {
  const { reviews } = props;
  reviews.map((review) => <p>1</p>);
};
type Props = {
  reviews: Array<IMyReview>;
};
export default UserReviewList;
