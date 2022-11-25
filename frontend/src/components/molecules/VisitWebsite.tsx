import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const VisitWebsite = () => {
  return (
    <div className="bg-white p-4 pr-12 rounded-lg flex flex-col border">
      <a className="text-blue-600 text-xl font-title" href="">
        www.bayer.com
      </a>
      <span className="flex items-centerm my-3">
        Visit their website{' '}
        <span className="text-xl mx-2">
          <FiExternalLink />
        </span>{' '}
      </span>
    </div>
  );
};

export default VisitWebsite;
