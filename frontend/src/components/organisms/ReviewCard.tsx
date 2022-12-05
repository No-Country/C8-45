import { AiOutlineStar } from 'react-icons/ai';
import { useAppSelector } from '../../redux/store';
import Avatar from '../atoms/Avatar';
import Rating from '../atoms/Rating';
const ReviewCard = (props: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  const { description, rating, title, createdAt, id, experienceDate, url } = props;

  const formatDate = (date: string) => (new Date(date)).toLocaleDateString('en-us', { dateStyle: 'medium' });

  return (
    <div key={id} className="w-full border p-3 rounded-xl bg-zinc-50 mb-6 ">
      {/* Image profile and creation date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar />
          <span className="text-xl ml-3 font-title">{user?.name}</span>
        </div>
        <span className="text-gray-600">{formatDate(createdAt)}</span>
      </div>
      <div className="mt-3 flex justify-between">
        <div>
          <span className="text-lg font-title">Your rating</span>
          <span className="flex gap-1 text-xl ">
            <Rating rating={Number(rating)} />
          </span>
        </div>
        <div className="p-3 border rounded-xl bg-indigo-50 text-blue-600 font-title">
          <a href="">{url || "www.ejemplp.com"}</a>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-lg font-title">{title}</span>
        <p className="font-poppins text-gray-600">
          {description}
        </p>
      </div>
      <div className="mt-2">
        <span className="text-lg font-title">Experience Date</span>
        <p className="font-poppins text-gray-600">{formatDate(experienceDate)}</p>
      </div>
    </div>
  );
};

type Props = {
  description: string,
  rating: string,
  title: string,
  createdAt: string,
  id: string,
  experienceDate: string,
  url?: string,
}

export default ReviewCard;
