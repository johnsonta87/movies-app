import React from 'react';
import PropTypes from 'prop-types';

export default function Latest({ data }) {
  return (
    <div>
      <h1>Latest</h1>

      {data.title}
    </div>
  );
}

Latest.propTypes = {
  data: PropTypes.object.isRequired,
};
