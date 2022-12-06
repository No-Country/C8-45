import { useParams } from 'react-router-dom';
import { useGetCompanyByIDQuery } from '../../redux/api/companyApi';
import { IReview } from '../../redux/api/types';
import Loading from '../molecules/Loading';
import BusinessStats from '../organisms/BusinessStats';
import ReviewCard from '../organisms/ReviewCard';

const ReviewsCompanyID = () => {
  const { id } = useParams();
  const { data, isFetching, isLoading, isSuccess } = useGetCompanyByIDQuery(id);

  return (
    <section className="lg:w-9/12 mx-auto">
      <BusinessStats
        name={data?.name}
        reviewsQuantity={data?.reviewsQuantity}
        ratingGeneral={data?.ratingGeneral}
        website={data?.website}
        description={data?.description}
        avatar={data?.avatar}
      />
      <div className="flex flex-col md:flex-row mx-auto my-10 divide-x-2 ">
        <main className="md:w-9/12 md:p-4">
          <div className="w-full">
            {isLoading || isFetching ? (
              <Loading />
            ) : (
              isSuccess &&
              data?.review.map((review: IReview) => (
                <ReviewCard
                  name={review.user.name + ' ' + review.user.lastName}
                  avatar={review.user.avatar}
                  key={review.id}
                  description={review.description}
                  rating={review.rating}
                  title={review.title}
                  createdAt={review.createdAt}
                  experienceDate={review.experienceDate}
                />)))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default ReviewsCompanyID;