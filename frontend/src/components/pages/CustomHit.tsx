import { BaseHit, Hit } from 'instantsearch.js';
import React from 'react';
import { useHits, UseHitsProps } from 'react-instantsearch-hooks-web';

const CustomHit = (props: UseHitsProps) => {
  const { hits, results, sendEvent } = useHits(props);

  return hits.map((hit) => {
    <p key={hit.objectID}>{hit.objectID}</p>;
  });
};

export default CustomHit;
