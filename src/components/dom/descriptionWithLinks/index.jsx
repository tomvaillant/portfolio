import React from 'react';

const DescriptionWithLinks = () => {
  return (
    <span>
      A creative producer building experiences, documentaries, and visual narratives for the web. Currently building{' '}
      <a className="description-links" href="https:buriedsignals.com" target="_blank" rel="noopener noreferrer">
        Buried Signals
      </a>{' '}
      and{' '}
      <a className="description-links" href="https:nuanced.com" target="_blank" rel="noopener noreferrer">
        Nuanced
      </a>
      .
    </span>
  );
};

export default DescriptionWithLinks;