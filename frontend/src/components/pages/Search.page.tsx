import SearchBar from '../molecules/SearchBar';
import ReviewCard from '../organisms/ReviewCard';
import { useState } from 'react';
import NoFoundReview from '../organisms/NoFoundReview';

const SearchPage = () => {
    const [reviews, setReviews] = useState([]);
    
    return (
        <div className="md:w-6/12 mx-auto my-10 z-1">
            <SearchBar />
            <div className='mb-5' />
            {reviews.length === 0 ? (
                <NoFoundReview />
            ) : (
                reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        id={review.id}
                        title={review.title}
                        description={review.description}
                        rating={review.rating}
                        url={review.url}
                        createdAt={review.createdAt}
                    />
                ))

            )}
        </div>
    );
};

export default SearchPage;
