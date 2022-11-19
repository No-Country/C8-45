import { useState } from 'react';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import RatingStars from '../molecules/RatingStars';

export default function ReviewForm() {
  const [RatingIndex, setRatingIndex] = useState<number>(0);
  const [inputs, setInputs] = useState({})
  const submit = (e: any) => {
    e.preventDefault();

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <div className="flex flex-col">
        <Input type="text" placeholder="Company Name" callback={handleChange}/>
        <Input type="text" placeholder="Company URL" callback={handleChange} />
        <label className="text-slate-500">Your Rating</label>
        <RatingStars
          RatingIndex={RatingIndex}
          setRatingIndex={setRatingIndex}
        />
        <Input type="date" placeholder="Date" />
        <TextArea placeholder="What fo you think about(Company Name)..."  />

        <button
          onClick={submit}
          type="submit"
          className="my-2 bg-blue-600 text-white text-lg  px-10 p-3 rounded-full hover:bg-blue-700"
        >
          Publish
        </button>
      </div>
    </form>
  );
}};
