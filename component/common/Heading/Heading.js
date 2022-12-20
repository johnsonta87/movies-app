import React from 'react';

import PropTypes from 'prop-types';
import { HeadingStyle } from './HeadingStyles';

export default function Heading({ heading }) {
  if (!heading) {
    return null;
  }

  return <HeadingStyle>{heading}</HeadingStyle>;
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};
