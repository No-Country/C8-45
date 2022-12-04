import React, { useState } from 'react';
import { useMakeReviewMutation } from '../../redux/api/reviewApi';
import { useAppDispatch } from '../../redux/store';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import RatingInpu from '../molecules/RatingInput';
import RatingStars from '../molecules/RatingStars';

export default function ReviewForm() {
  const [RatingIndex, setRatingIndex] = useState<number>(0);
  const [inputs, setInputs] = useState({
    company: '',
    url: '',
    title: '',
    description: '',
    rating: 0,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const [makeReview, { isLoading, isSuccess, isError }] =
    useMakeReviewMutation();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const res = await makeReview(inputs).unwrap();
    console.log(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="flex flex-col w-full my-3">
          <label htmlFor="company">Company Name</label>
          <Input
            name="title"
            type="text"
            placeholder="Review Title"
            callback={handleChange}
          />
        </div>
        <div className="flex flex-col w-full my-3">
          <label htmlFor="company">Company Name</label>
          <Input
            name="company"
            type="text"
            placeholder="Company Name"
            callback={handleChange}
          />
        </div>

        <div className="w-full flex flex-col my-3">
          <label htmlFor="url" className="font-poppins">
            Company URL
          </label>
          <Input
            name="url"
            type="text"
            placeholder="example.com"
            callback={handleChange}
          />
        </div>
        <label className="text-slate-500 font-poppins">Your Rating</label>
        {/* <RatingStars
        
          RatingIndex={RatingIndex}
          setRatingIndex={setRatingIndex}
        /> */}
        <RatingInpu />
        <TextArea name="description" placeholder={`Leave your opinion...`} />
        <input
          type="submit"
          value={'Publish'}
          className="p-3 bg-blue-600 my-2 text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700"
        />
      </div>
    </form>
  );
}
