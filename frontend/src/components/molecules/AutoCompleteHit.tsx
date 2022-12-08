import React from 'react';
import { HitsProps } from 'react-instantsearch-hooks-web';
import { Hit as AlgoliaHit } from 'instantsearch.js/es/types';
import { Link } from 'react-router-dom';

const AutoCompleteHit = ({ hit }: HitProps) => {
  return (
    <div>
      <Link to={`business/${hit.id}`}>
        <p>Hello</p>
        {hit.companyName}
      </Link>
    </div>
  );
};
type HitProps = {
  hit: AlgoliaHit<{
    companyName: string;
    companyURL: string;
    id: string;
    rating: number;
    reviewsNumber: number;
  }>;
};
export default AutoCompleteHit;
