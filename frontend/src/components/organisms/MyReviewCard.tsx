import moment from 'moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reviewApi, {
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} from '../../redux/api/reviewApi';
import { IMyReviewFetched } from '../../redux/api/types';
import { useAppSelector } from '../../redux/store';
import Avatar from '../atoms/Avatar';
import Rating from '../atoms/Rating';
const MyReviewCard = (props: Props) => {
  const { review } = props;
  const [edit, setEdit] = useState(false);
  const [reviewData, setReviewData] = useState({ id: review.id });
  const user = useAppSelector((state) => state.auth.user);
  const formatedURl = review.companyURL.replace(
    /^(?:https?:\/\/)?(?:www\.)?/i,
    ''
  );
  const formatedData = moment(review.createdAt).fromNow();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setReviewData((values) => ({ ...values, [name]: value }));
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setReviewData((values) => ({ ...values, [name]: value }));
  };

  const [updateReview, { isLoading, isSuccess, isError, data }] =
    useUpdateReviewMutation();
  const handleUpdateReview = async () => {
    if (review.id) {
      await updateReview(reviewData);
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
        {!edit ? (
          <p className="font-poppins text-gray-600">{review.title}</p>
        ) : (
          <input
            defaultValue={review.title}
            name={'title'}
            type="text"
            onChange={handleChange}
            className="w-full p-3 border rounded-full"
          />
        )}
      </div>
      {/* Rating */}
      <div className="mt-2">
        <span className="text-lg font-title">Your rating</span>
        {!edit ? (
          <Rating rating={review.rating} />
        ) : (
          <input
            defaultValue={review.rating}
            max={5}
            name={'rating'}
            min={0}
            step={1}
            type="range"
            onChange={handleChange}
            className="w-6/12 block border "
          />
        )}
      </div>
      {/* Descriptio */}
      <div className="mt-2">
        <span className="text-lg font-title">Message</span>
        {!edit ? (
          <p className="font-poppins text-gray-600">{review.description}</p>
        ) : (
          <textarea
            name="description"
            defaultValue={review.description}
            onChange={handleTextAreaChange}
            rows={5}
            className="w-full font-poppins text-gray-600 resize-none p-2 border rounded-xl"
          />
        )}
      </div>
      {/* Experiece date */}
      <div className="mt-2">
        <span className="text-lg font-title">Experience Date</span>
        <p className="font-poppins text-gray-600">{review.experienceDate}</p>
      </div>
      <div className="flex justify-end items-center">
        {!edit ? (
          <button
            onClick={() => {
              setEdit(!edit);
            }}
            className="bg-indigo-50 m-3 w-32 p-2 rounded-xl text-blue-600 hover:bg-indigo-100"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={() => {
              handleUpdateReview();
              setEdit(!edit);
            }}
            className="bg-indigo-50 m-3 w-32 p-2 rounded-xl text-blue-600 hover:bg-indigo-100"
          >
            Save changes
          </button>
        )}
        <DeleteButton reviewId={review.id} />
      </div>
    </div>
  );
};

export function DeleteButton(props: DeleteButtonProps) {
  const { reviewId } = props;
  const [deleteReview, { isLoading, isSuccess, isError, data }] =
    useDeleteReviewMutation();

  const handleClickDelete = async (e: any) => {
    if (reviewId) {
      const data = await deleteReview(reviewId).unwrap();
    }
  };
  return (
    <button
      onClick={() => handleClickDelete(reviewId)}
      className="bg-red-50 w-32 p-2 rounded-xl text-red-600 hover:bg-red-100"
    >
      Delete
    </button>
  );
}
type DeleteButtonProps = {
  reviewId: string | undefined;
};

type Props = {
  review: IMyReviewFetched;
};
export default MyReviewCard;
