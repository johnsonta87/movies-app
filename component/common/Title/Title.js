import React from 'react';
import PropTypes from 'prop-types';
import { TitleStyles } from './TitleStyles';

export default function Title({ title }) {
  if (!title) {
    return null;
  }

  return <TitleStyles>{title}</TitleStyles>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
