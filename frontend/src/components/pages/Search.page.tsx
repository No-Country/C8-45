import SearchBar from '../molecules/SearchBar';
import ReviewCard from '../organisms/ReviewCard';
import { useState } from 'react';
import NoFoundReview from '../organisms/NoFoundReview';
import { IReview } from '../../redux/api/types';

const SearchPage = () => {
    const [reviews, setReviews] = useState([]);

    return (
        <div className="md:w-6/12 mx-auto mt-5 z-1">
            <SearchBar />
            {reviews.length === 0 ? (
                <NoFoundReview />
            ) : (
                <div className='grid lg:grid-cols-2 gap-4 mt-5'>
                    reviews.map((review: IReview) => (
                        <ReviewCard
                            key={review.id}
                            title={review.title}
                            description={review.description}
                            rating={review.rating}
                            //url={review.url}
                            createdAt={review.createdAt}
                            experienceDate={review.experienceDate}
                            name={review.user.name + ' ' + review.user.lastName}
                            avatar={review.user.avatar}
                        />
                    ))
                </div>

            )}
        </div>
    );
};

export default SearchPage;
