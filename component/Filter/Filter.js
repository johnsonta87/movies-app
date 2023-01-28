import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../common/Button/ActionButton';
import { FilterStyles } from './FilterStyles';

export default function PrimaryFilter({ options, isSimple }) {
  if (!options) {
    return;
  }

  return (
    <FilterStyles isSimple={isSimple}>
      {options.map((option, index) => (
        <ActionButton key={index} buttonValue={option} isSimple={isSimple} />
      ))}
    </FilterStyles>
  );
}

PrimaryFilter.propTypes = {
  options: PropTypes.array.isRequired,
  isSimple: PropTypes.bool,
};
