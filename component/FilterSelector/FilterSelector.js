import React from 'react';

import PropTypes from 'prop-types';
import { FilterButtonStyle, FilterSelectorStyle } from './FilterSelectorStyles';
import Title from '../common/Title/Title';

export default function FilterSelector({ heading, options }) {
  if (!options) {
    return null;
  }

  return (
    <div>
      <Title title={heading} />

      <FilterSelectorStyle>
        {options.map((item, index) => (
          <FilterButtonStyle key={index} type="button" className="select-item">
            {item}
          </FilterButtonStyle>
        ))}
      </FilterSelectorStyle>
    </div>
  );
}

FilterSelector.propTypes = {
  heading: PropTypes.string,
  options: PropTypes.array,
};
