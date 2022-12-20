import React from 'react';

import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import formatDate from '../../../helpers/utils';
import { MovieCardItemStyle } from './MovieCardItemStyles';
import PosterImage from '../ContainerImage/PosterImage';

export default function MovieCardItem({ data }) {
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <MovieCardItemStyle>
      <PosterImage url={data.poster_path} isRounded />

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
