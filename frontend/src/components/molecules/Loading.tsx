import React from 'react';
import { CgSpinner } from 'react-icons/cg';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[40vh] p-10">
      <span className="text-5xl max-w-max animate-spin block-inline text-blue-600">
        <CgSpinner />
      </span>
      <span className="text-xl font-title block-inline text-blue-600">
        Loading
      </span>
    </div>
  );
};

export default Loading;
