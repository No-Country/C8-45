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
    companyName: '',
    companyUrl: '',
    title: '',
    description: '',
    rating: 0,
    experienceDate: '',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const [makeReview, { isLoading, isSuccess, isError }] =
    useMakeReviewMutation();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await makeReview(inputs).unwrap();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="flex flex-col w-full my-3">
          <label htmlFor="company">Company Name</label>
          <Input
            name="companyName"
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
            name="companyUrl"
            type="text"
            placeholder="example.com"
            callback={handleChange}
          />
        </div>

        <label className=" font-poppins">Your Rating</label>
        <input
          type="range"
          name="rating"
          defaultValue={0}
          step={1}
          max={5}
          min={0}
          onChange={handleChange}
          id=""
        />
        <div className="w-full flex flex-col my-3">
          <label htmlFor="url" className="font-poppins">
            Experience Date
          </label>
          <input
            className="p-3 rounded-full mt-2 border"
            type="date"
            name="experienceDate"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col my-3">
          <label htmlFor="url" className="font-poppins">
            Title
          </label>
          <Input
            name="title"
            type="text"
            placeholder="Your review title"
            callback={handleChange}
          />
        </div>
        <div className="w-full flex flex-col my-3">
          <label htmlFor="url" className="font-poppins">
            Description
          </label>
          <textarea
            className="rounded-xl border mt-2 resize-none p-2"
            placeholder="Tell us your experience"
            rows={5}
            name="description"
            onChange={handleTextAreaChange}
          />
        </div>
        <input
          type="submit"
          value={'Publish'}
          className="p-3 bg-blue-600 my-2 text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700"
        />
      </div>
    </form>
  );
}
