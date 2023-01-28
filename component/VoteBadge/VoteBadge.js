import React from 'react';
import PropTypes from 'prop-types';
import { VoteBadgeStyles } from './VoteBadgeStyles';

export default function VoteBadge({ percent }) {
  if (!percent) {
    return;
  }

  return (
    <VoteBadgeStyles percent={percent}>
      {percent}
      <span className="percent-icon" />
    </VoteBadgeStyles>
  );
}

VoteBadge.propTypes = {
  percent: PropTypes.number.isRequired,
};
