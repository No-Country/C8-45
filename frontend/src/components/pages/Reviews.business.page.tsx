import { useDispatch } from 'react-redux';
import { useGetCompanyReviewsQuery } from '../../redux/api/companyApi';
import { getCompanyReviews } from '../../redux/features/reviewSlice';
import ReviewCard from '../organisms/ReviewCard';

const MyBusinessReviews = () => {
  const { data, error, isLoading } = useGetCompanyReviewsQuery(null);
  const dispatch = useDispatch();
  dispatch(getCompanyReviews(null));

  interface Review {
    id: string,
    description: string,
    rating: string,
    title: string,
    createdAt: string,
    experienceDate: string,
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
              createdAt={review.createdAt}
              experienceDate={review.experienceDate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBusinessReviews;
