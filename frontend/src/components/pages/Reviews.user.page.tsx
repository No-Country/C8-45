import { p } from 'vitest/dist/index-2f5b6168';
import userApi from '../../redux/api/userApi';
import Loading from '../molecules/Loading';
import MyReviewCard from '../organisms/MyReviewCard';

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
        isSuccess &&
        data.map((review) => (
          <MyReviewCard
            description={review.description}
            title={review.title}
            key={review.id}
            rate={review.rating}
            companyUrl={review.companyURL}
            createdAt={review.createdAt}
            companyId={review.companyId}
            companyName={review.companyName}
          />
        ))
      )}
    </div>
  );
};

export default MyReviews;
