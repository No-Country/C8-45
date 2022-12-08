import VerifyBadge from '../atoms/VerifyBadge';
import VisitWebsite from '../molecules/VisitWebsite';
import { Link } from 'react-router-dom';
import Rating from '../atoms/Rating';
import defaultCompanyAvatar from '../../assets/defaultCompanyAvatar.png';
import { useAppSelector } from '../../redux/store';

const BusinessStats = (props: Props) => {
  const { name, reviewsQuantity, ratingGeneral, website, description, avatar } =
    props;
  const { user } = useAppSelector((state) => state.auth);

  const ratingString = ['Terrible', 'Bad', 'Average', 'Good', 'Excellent'];

  return (
    <div className="bg-indigo-50 p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center ">
          <img
            alt="company profile pic"
            src={avatar || defaultCompanyAvatar}
            className="h-36 w-36 bg-indigo-50 rounded my-2"
          />
          <VerifyBadge />
        </div>
        <div className="flex flex-col mx-3 text-center md:text-left">
          <h2 className="text-xl font-title">{name}</h2>
          <h4 className="text-md">{description}</h4>
          <div className="flex-col flex my-1">
            <span className="text-sm font-title">REVIEWS</span>
            <span>{reviewsQuantity}</span>
          </div>
          <div className="flex-col flex my-1">
            <span className="text-sm font-title">
              RATING: {ratingString[Math.floor(ratingGeneral)]}
            </span>
            <span className="flex justify-center md:justify-start gap-1 text-3xl">
              <Rating rating={ratingGeneral} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <VisitWebsite website={website} />
        {user?.role.id !== 3 && (
          <Link
            to={'/me'}
            className={
              'p-3 bg-blue-600 text-center flex justify-center items-center rounded-lg text-white my-5 block hover:bg-blue-700'
            }
          >
            Create a review
          </Link>
        )}
      </div>
    </div>
  );
};

type Props = {
  name: string;
  reviewsQuantity: string;
  ratingGeneral: number;
  website: string;
  description: string;
  avatar?: string;
};

export default BusinessStats;
