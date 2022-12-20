import React from 'react';
import PropTypes from 'prop-types';

import { PosterImageStyle } from './PosterImageStyles';

export default function PosterImage({ url, isRounded }) {
  if (!url) {
    return null;
  }

  return (
    <PosterImageStyle>
      <img
        className={isRounded && 'is-rounded'}
        src={`http://image.tmdb.org/t/p/w185/${url}`}
        alt=""
      />
    </PosterImageStyle>
  );
}

PosterImage.propTypes = {
  url: PropTypes.string.isRequired,
  isRounded: PropTypes.bool,
};
