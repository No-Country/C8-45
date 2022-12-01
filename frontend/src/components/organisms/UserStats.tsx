import UserStatsAvatar from '../molecules/UserStatsAvatar';
import Button from '../atoms/Button';
import { AiFillStar } from 'react-icons/ai';
import { useAppSelector } from '../../redux/store';
import { Link } from 'react-router-dom';

function UserStats() {
  const { user } = useAppSelector((state) => state.auth);
  //TODO make a fetch to each user
  return (
    <div className="flex-col flex md:flex-row items-center justify-around bg-indigo-50 p-10 lg:w-9/12 mx-auto rounded-2xl">
      <UserStatsAvatar />
      <div className="flex flex-col items-center">
        <div className="flex text-blue-600 items-center  font-poppins font-bold">
          <span className="text-2xl">
            <AiFillStar />
          </span>{' '}
          <span className="block">REVIEWS</span>
        </div>
        <div className="font-bold font-poppins text-xl">
          {user?.reviewsQuantity}
        </div>
      </div>
      <Link
        className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 font-poppints text-white"
        to="/me"
      >
        Make a review
      </Link>
    </div>
  );
}

export default UserStats;
