import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import reviewApi, { useDeleteReviewMutation } from '../../redux/api/reviewApi';
import { useAppSelector } from '../../redux/store';
import Avatar from '../atoms/Avatar';
import Rating from '../atoms/Rating';
const MyReviewCard = (props: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  const {
    description,
    companyName,
    rate,
    companyId,
    title,
    companyUrl,
    createdAt,
    reviewId,
  } = props;
  const formatedURl = companyUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
  const formatedData = moment(createdAt).fromNow();

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = await loginUser(inputs).unwrap();
  //   localStorage.setItem('auth_token', data.token);
  //   dispatch(setCredentials(data));
  //   if (isSuccess) {
  //     console.log('WOrks');
  //   }
  // };
  // const [loginUser, { isLoading, isSuccess, error, isError, data }] =
  // useLoginUserMutation();
  const [deleteReview, { isLoading, isSuccess, isError, data }] =
    useDeleteReviewMutation();
  const handleClickDelete = async (e: any) => {
    if (reviewId) {
      const data = await deleteReview(reviewId).unwrap();
      console.log(data);
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
          <p className="font-poppins text-blue-600">{companyName}</p>
        </div>
        <div className="p-3  flex border rounded-xl bg-indigo-50 text-blue-600 font-title">
          <Link to={`/business/${companyId}`}>{formatedURl}</Link>
        </div>
      </div>
      {/* title */}
      <div className="mt-2">
        <span className="text-lg font-title">Title</span>
        <p className="font-poppins text-gray-600">{title}</p>
      </div>
      {/* Rating */}
      <div className="mt-2">
        <span className="text-lg font-title">Your rating</span>
        <Rating rating={rate} />
      </div>
      {/* Descriptio */}
      <div className="mt-2">
        <span className="text-lg font-title">Message</span>
        <p className="font-poppins text-gray-600">{description}</p>
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
          onClick={() => handleClickDelete(reviewId)}
          className="bg-red-50 w-32 p-2 rounded-xl text-red-600 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

type Props = {
  description: string;
  title: string;
  companyUrl: string;
  companyId: string | undefined;
  reviewId: string | undefined;
  companyName: string;
  rate: number;
  createdAt: string | undefined;
};
export default MyReviewCard;
