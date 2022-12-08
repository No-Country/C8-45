import ReviewCard from '../organisms/ReviewCard';
import { useState } from 'react';
import NoFoundReview from '../organisms/NoFoundReview';
import { IReview } from '../../redux/api/types';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const [reviews, setReviews] = useState([]);
    const param = useParams().category;

    return (
        <div className="md:w-6/12 mx-auto mt-5 z-1">
            <div className="md:w-6/12 mx-auto z-10">
                <h1 className="text-5xl font-title font-bold text-center leading-snug">
                    Categoria {param}
                </h1>
            </div>
            {reviews.length === 0 ? (
                <div className='row'>
                    <div className='col'>
                        <ReviewCard
                            title={param || "titulo"}
                            description={'No hay reviews para esta categoria'}
                            rating="0"
                            //url={review.url}
                            createdAt={new Date().toDateString()}
                            experienceDate={new Date().toDateString()}
                            name={'No hay reviews'}
                            avatar={'https://media.istockphoto.com/id/1038232966/vector/upset-magnifying-glass-vector-illustration.jpg?b=1&s=612x612&w=0&k=20&c=ddPTf1vKFaGLTMl7wx1C7E5t6uZlIMRpDywyWxAdrDo='}
                        />
                    </div>
                    <div className='col'>
                        <ReviewCard
                            title={param || "titulo"}
                            description={'No hay reviews para esta categoria'}
                            rating="0"
                            //url={review.url}
                            createdAt={new Date().toDateString()}
                            experienceDate={new Date().toDateString()}
                            name={'No hay reviews'}
                            avatar={'https://media.istockphoto.com/id/1038232966/vector/upset-magnifying-glass-vector-illustration.jpg?b=1&s=612x612&w=0&k=20&c=ddPTf1vKFaGLTMl7wx1C7E5t6uZlIMRpDywyWxAdrDo='}
                        />
                    </div>
                </div>


            ) : (
                reviews.map((review: IReview) => (
                    <div className='row-span-2'>
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
                    </div>

                ))

            )}
        </div>
    );
};

export default CategoryPage;
