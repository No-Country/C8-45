import { useState } from 'react';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import RatingStars from '../molecules/RatingStars';

export default function ReviewForm() {
  const [RatingIndex, setRatingIndex] = useState<number>(0);
  const [inputs, setInputs] = useState({})
  const handleSubmit = (event:React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();};

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <Input name="company" type="text" placeholder="Company Name" callback={handleChange}/>
        <Input name="url" type="text" placeholder="Company URL" callback={handleChange} />
        <label className="text-slate-500">Your Rating</label>
        <RatingStars
          RatingIndex={RatingIndex}
          setRatingIndex={setRatingIndex}
        />
        <Input name="date" type="date" placeholder="Date" />
        <TextArea placeholder="What fo you think about(Company Name)..."  />
        <input type='submit' value={'Publish'} className='p-3 bg-blue-600 my-2 text-white font-poppins rounded-full cursor-pointer hover:bg-blue-700'/>
      </div>
    </form>
  );
};
