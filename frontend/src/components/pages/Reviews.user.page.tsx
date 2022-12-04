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

  console.log(data);
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
            rate={parseInt(review.rating)}
            company={review.company}
            creationDate={review.createdAt}
          />
        ))
      )}
    </div>
  );
};

export default MyReviews;
