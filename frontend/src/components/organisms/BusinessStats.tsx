import React from 'react';
import VerifyBadge from '../atoms/VerifyBadge';
import { AiOutlineStar } from 'react-icons/ai';
import VisitWebsite from '../molecules/VisitWebsite';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import Rating from '../atoms/Rating';

const BusinessStats = (props: Props) => {
  const { name, reviewsQuantity, ratingGeneral, website } = props;
  return (
    <div className="bg-indigo-50 p-5 rounded-xl flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center ">
          <div className="h-36 w-36 bg-gray-200 border-2 rounded my-2"></div>
          <VerifyBadge />
        </div>
        <div className="flex flex-col mx-3 text-center md:text-left">
          <h2 className="text-xl font-title font-title">{name}</h2>
          <div className="flex-col flex my-1">
            <span className="text-sm font-title">REVIEWS</span>
            <span>{reviewsQuantity}</span>
          </div>
          <div className="flex-col flex my-1">
            <span className="text-sm font-title">RATING</span>
            <span className="flex gap-1 text-3xl">
              <Rating rating={ratingGeneral} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <VisitWebsite website={website} />
        {/* <Link
          to={'create-review'}
          className={
            'p-3 bg-blue-600 text-center flex items-center rounded-lg text-white my-5 block hover:bg-blue-700'
          }
        >
          Make a review
        </Link> */}
      </div>
    </div>
  );
};

type Props = {
  name: string,
  reviewsQuantity: string,
  ratingGeneral: number,
  website: string,
}

export default BusinessStats;
