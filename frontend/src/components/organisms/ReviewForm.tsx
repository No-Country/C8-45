import { useState } from 'react';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import RatingStars from '../molecules/RatingStars';

export default function ReviewForm() {
  const [RatingIndex, setRatingIndex] = useState<number>(0);

  const submit = (e: any) => {
    e.preventDefault();

    const data = {
      companyName: e.target.form[0].value,
      companyUrl: e.target.form[1].value,
      rating: RatingIndex,
      date: e.target.form[7].value,
      about: e.target.form[8].value,
    };
    alert(`Review Submitted ${data.companyName}`);
    console.log(data);
  };

  return (
    <form>
      <div className="flex flex-col">
        <Input type="text" placeholder="Company Name" />
        <Input type="text" placeholder="Company URL" />
        <label className="text-slate-500">Your Rating</label>
        <RatingStars
          RatingIndex={RatingIndex}
          setRatingIndex={setRatingIndex}
        />
        <Input type="date" placeholder="Date" />
        <TextArea placeholder="What fo you think about(Company Name)..." />

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
}
