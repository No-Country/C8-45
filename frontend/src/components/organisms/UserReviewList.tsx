import React from 'react';
import { IMyReviewFetched } from '../../redux/api/types';
import ReviewCard from '../atoms/ReviewCard';
import MyReviewCard from './MyReviewCard';

const UserReviewList = (props: Props) => {
  const { reviews } = props;
  if (reviews.length === 0) {
    return <p>No tienes reviews</p>;
  } else {
    reviews.map((review) => (
      <MyReviewCard
        description={review.description}
        title={review.title}
        key={review.id}
        rate={review.rating}
        reviewId={review.id}
        companyUrl={review.companyURL}
        createdAt={review.createdAt}
        companyId={review.companyId}
        companyName={review.companyName}
      />
    ));
  }
};
type Props = {
  reviews: Array<IMyReviewFetched>;
};
export default UserReviewList;
