import { p } from 'vitest/dist/index-2f5b6168';
import userApi from '../../redux/api/userApi';
import Loading from '../molecules/Loading';
import MyReviewCard from '../organisms/MyReviewCard';
import UserReviewList from '../organisms/UserReviewList';

const MyReviews = () => {
  const { isLoading, isFetching, isSuccess, data } =
    userApi.endpoints.getMyReviews.useQuery(null, {
      skip: false,
    });
  return (
    <div>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        isSuccess && <UserReviewList reviews={data} />
      )}
    </div>
  );
};

export default MyReviews;
