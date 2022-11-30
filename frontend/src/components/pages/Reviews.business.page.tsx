import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetReviewsQuery } from '../../redux/api/reviewApi';
import { getReviews } from '../../redux/features/reviewSlice';
import ReviewCard from '../organisms/ReviewCard';

const MyBusinessReviews = () => {
  const { data, error, isLoading } = useGetReviewsQuery(null);
  const dispatch = useDispatch();
  dispatch(getReviews(null));

  interface Review {
    id: string,
    description: string,
    rating: string,
    title: string,
    createdAt: string,
  };

  return (
    <div className="w-full">
      <ul>
        {data?.map((review: Review) => (
          <li key={review.id}>
            <ReviewCard
              id={review.id}
              description={review.description}
              rating={review.rating}
              title={review.title}
              createdAt={review.createdAt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBusinessReviews;
