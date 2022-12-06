import React from 'react';
import { Link } from 'react-router-dom';

const NoRevies = () => {
  return (
    <div className="border text-center py-16 rounded-xl bg-blue-50 items-center flex flex-col">
      <span className="text-3xl font-title text-blue-600 ">
        You dont have reviews yet 😥
      </span>
      <Link
        to="/me"
        className=" bg-blue-600 flex p-3 rounded-full text-white mt-4 "
      >
        Create one
      </Link>
    </div>
  );
};

export default NoRevies;
