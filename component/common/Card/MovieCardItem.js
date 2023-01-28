import React from 'react';

import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { formatDate, percentage } from '../../../helpers/utils';
import { MovieCardItemStyle } from './MovieCardItemStyles';
import PosterImage from '../ContainerImage/PosterImage';
import VoteBadge from '../../VoteBadge/VoteBadge';

export default function MovieCardItem({ data }) {
  const { vote_average: voteAverage } = data;

  if (!data) {
    return null;
  }

  const votePercent = percentage(voteAverage, 10);

  return (
    <MovieCardItemStyle>
      <div className="movie-banner-wrapper">
        <PosterImage url={data.poster_path} isRounded />
        <VoteBadge percent={votePercent} />
      </div>

      {data.title && <Text style={styles.text}>{data.title}</Text>}
      <br />
      {data.release_date && (
        <Text style={styles.text}>{formatDate(data.release_date)}</Text>
      )}
    </MovieCardItemStyle>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});

MovieCardItem.propTypes = {
  data: PropTypes.object,
};
