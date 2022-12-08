import { IMyReviewFetched } from '../../redux/api/types';
import NoRevies from '../molecules/NoRevies';
import MyReviewCard from './MyReviewCard';

const UserReviewList = (props: Props) => {
  const { reviews } = props;

  if (reviews.length === 0) {
    return <NoRevies />;
  } else {
    return reviews.map((review) => {
      return <MyReviewCard review={review} />;
    });
  }
};
type Props = {
  reviews: Array<IMyReviewFetched>;
};
export default UserReviewList;
