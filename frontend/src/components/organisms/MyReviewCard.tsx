import moment from 'moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reviewApi, { useDeleteReviewMutation } from '../../redux/api/reviewApi';
import { IMyReviewFetched } from '../../redux/api/types';
import { useAppSelector } from '../../redux/store';
import Avatar from '../atoms/Avatar';
import Rating from '../atoms/Rating';
const MyReviewCard = (props: Props) => {
  const [edit, setEdit] = useState(false);
  const [reviewData, setReviewData] = useState({});
  const user = useAppSelector((state) => state.auth.user);
  const { review } = props;
  const formatedURl = review.companyURL.replace(
    /^(?:https?:\/\/)?(?:www\.)?/i,
    ''
  );
  const formatedData = moment(review.createdAt).fromNow();

  const [deleteReview, { isLoading, isSuccess, isError, data }] =
    useDeleteReviewMutation();
  const handleClickDelete = async (e: any) => {
    if (review.id) {
      const data = await deleteReview(review.id).unwrap();
    }
  };

  return (
    <div className="w-full border p-3 rounded-xl bg-zinc-50 mb-6 ">
      {/* Image profile and creation date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar />
          <span className="text-xl ml-3 font-title">{user?.name}</span>
        </div>
        <span className="text-gray-600">{formatedData}</span>
      </div>
      {/* Company Data */}
      <div className="mt-3 flex bg-indigo-100 rounded-xl p-2  items-center justify-between">
        <div>
          <span className="text-lg font-title">Company</span>
          <p className="font-poppins text-blue-600">{review.companyName}</p>
        </div>
        <div className="p-3  flex border rounded-xl bg-indigo-50 text-blue-600 font-title">
          <Link to={`/business/${review.companyId}`}>{formatedURl}</Link>
        </div>
      </div>
      {/* title */}
      <div className="mt-2">
        <span className="text-lg font-title">Title</span>
        <p className="font-poppins text-gray-600">{review.title}</p>
      </div>
      {/* Rating */}
      <div className="mt-2">
        <span className="text-lg font-title">Your rating</span>
        <Rating rating={review.rating} />
      </div>
      {/* Descriptio */}
      <div className="mt-2">
        <span className="text-lg font-title">Message</span>
        <p className="font-poppins text-gray-600">{review.description}</p>
        <textarea
          defaultValue={review.description}
          className="w-full font-poppins text-gray-600 resize-none"
        />
      </div>
      {/* Experiece date */}
      <div className="mt-2">
        <span className="text-lg font-title">Experience Date</span>
        <p className="font-poppins text-gray-600">02-January-2021</p>
      </div>
      <div className="flex justify-end items-center">
        <button className="bg-indigo-50 m-3 w-32 p-2 rounded-xl text-blue-600 hover:bg-indigo-100">
          Edit
        </button>
        <button
          onClick={() => handleClickDelete(review.id)}
          className="bg-red-50 w-32 p-2 rounded-xl text-red-600 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

type Props = {
  review: IMyReviewFetched;
};
export default MyReviewCard;
