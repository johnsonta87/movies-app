import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ title }) {
  if (!title) {
    return null;
  }

  return <h1>{title}</h1>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
