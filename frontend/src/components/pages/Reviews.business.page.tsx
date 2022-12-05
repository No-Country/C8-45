import { useDispatch } from 'react-redux';
import { useGetCompanyReviewsQuery } from '../../redux/api/companyApi';
import { IUser } from '../../redux/api/types';
import { getCompanyReviews } from '../../redux/features/reviewSlice';
import Loading from '../molecules/Loading';
import ReviewCard from '../organisms/ReviewCard';

const MyBusinessReviews = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useGetCompanyReviewsQuery(null);
  const dispatch = useDispatch();
  dispatch(getCompanyReviews(null));

  interface Review {
    id: string,
    description: string,
    rating: string,
    title: string,
    createdAt: string,
    experienceDate: string,
    user: IUser
  };

  return (
    <div className="w-full">
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        isSuccess &&
        data.map((review: Review) => (
          <ReviewCard
            name={review.user.name + ' ' + review.user.lastName}
            avatar={review.user.avatar}
            key={review.id}
            description={review.description}
            rating={review.rating}
            title={review.title}
            createdAt={review.createdAt}
            experienceDate={review.experienceDate}
          />
        )))}
    </div>
  );
};

export default MyBusinessReviews;
