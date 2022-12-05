import React from 'react';
import ReviewForm from '../organisms/ReviewForm';
import { useMakeReviewMutation } from '../../redux/api/reviewApi';

const ReviewFormPage = () => {
  return (
    <div className="px-5">
      <div className="bg-gray-50 p-5 rounded-xl border">
        <ReviewForm />
      </div>
    </div>
  );
};

export default ReviewFormPage;
