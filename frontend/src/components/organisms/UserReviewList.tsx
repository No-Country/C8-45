import React from 'react';
import { IMyReviewFetched } from '../../redux/api/types';

import NoRevies from '../molecules/NoRevies';
import MyReviewCard from './MyReviewCard';

const UserReviewList = (props: Props) => {
  const { reviews } = props;
  const reviewContent = reviews.map((review) => {
    return <MyReviewCard review={review} />;
  });
  if (reviews.length === 0) {
    return <NoRevies />;
  } else {
    return <> {reviewContent}</>;
  }
};
type Props = {
  reviews: Array<IMyReviewFetched>;
};
export default UserReviewList;
