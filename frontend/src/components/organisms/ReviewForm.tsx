import { useState } from 'react';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import RatingStars from '../molecules/RatingStars';

export default function ReviewForm() {
  const [RatingIndex, setRatingIndex] = useState<number>(0);
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
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
        <div className="my-3">
          <label htmlFor="date" className="font-poppins text-slate-500">
            Date of the experience
          </label>
          <Input name="date" type="date" placeholder="Date" />
        </div>

        <label className="text-slate-500 font-poppins">Your Rating</label>
        <RatingStars
          RatingIndex={RatingIndex}
          setRatingIndex={setRatingIndex}
        />
        <TextArea placeholder={`Leave your opinion...`} />
        <input
          type="submit"
          value={'Publish'}
          className="p-3 bg-blue-600 my-2 text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700"
        />
      </div>
    </form>
  );
}
