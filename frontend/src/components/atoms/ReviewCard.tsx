import Avatar from "./Avatar";
import Rating from "./Rating";
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

export default function ReviewCard(props: Props) {
  const { name, lastname, rating, comment, description, date, postDate, image } = props;

  const formatDate = (date: Date) => date.toLocaleDateString('en-us', { month: 'short', day: 'numeric', year: 'numeric' });

  const handleClickDelete = () => {
  };

  const handleClickEdit = () => {
  };

  return (
    <div className='bg-gray-100 border border-slate-300 rounded-2xl p-5'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <Avatar image={image} name={name} lastname={lastname} />
          {name + ' ' + lastname}
        </div>
        <span>{formatDate(postDate)}</span></div>
      <Rating rating={rating} />
      <div className='font-bold'>{comment}</div>
      <div className='mb-3'>{description}</div>
      <div className='font-bold'>Date of experience</div>
      <div className='mb-3'>{formatDate(date)}</div>
      <div className='flex justify-end'>
        <button className='flex items-center gap-1 mx-8' onClick={handleClickDelete}>
          <FiEdit2 />Edit</button>
        <button className='flex items-center gap-1 mx-8' onClick={handleClickEdit}>
          <FiTrash2 />Delete</button>
      </div>
    </div>
  )
};

type Props = {
  name: string;
  lastname: string;
  rating: number;
  comment: string;
  description: string;
  date: Date;
  postDate: Date;
  // eslint-disable-next-line react/require-default-props
  image: string;
};
