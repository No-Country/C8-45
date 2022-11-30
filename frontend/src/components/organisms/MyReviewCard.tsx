import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useAppSelector } from '../../redux/store';
import Avatar from '../atoms/Avatar';
const MyReviewCard = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="w-full border p-3 rounded-xl bg-zinc-50 mb-6 ">
      {/* Image profile and creation date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar />
          <span className="text-xl ml-3 font-title">{user?.name}</span>
        </div>
        <span className="text-gray-600">Nov/03/2022</span>
      </div>
      <div className="mt-3 flex justify-between">
        <div>
          <span className="text-lg font-title">Your rating</span>
          <span className="flex gap-1 text-xl ">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </span>
        </div>
        <div className="p-3 border rounded-xl bg-indigo-50 text-blue-600 font-title">
          <a href="">www.demo.com</a>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-lg font-title">Message</span>
        <p className="font-poppins text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi
          beatae et enim, libero quia laudantium. Minima repudiandae unde
          exercitationem nobis quae, quas ducimus consequatur? Eius velit sunt
          laborum libero!
        </p>
      </div>
      <div className="mt-2">
        <span className="text-lg font-title">Experience Date</span>
        <p className="font-poppins text-gray-600">02-January-2021</p>
      </div>
      <div className="flex justify-end items-center">
        <button className="bg-indigo-50 m-3 w-32 p-2 rounded-xl text-blue-600 hover:bg-indigo-100">
          Edit
        </button>
        <button className="bg-red-50 w-32 p-2 rounded-xl text-red-600 hover:bg-red-100">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyReviewCard;
