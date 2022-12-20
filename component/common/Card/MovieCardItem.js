import React from 'react';

import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ContainerImage from '../ContainerImage/ContainerImage';
import formatDate from '../../../helpers/utils';

export default function MovieCardItem({ data }) {
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <div style={styles.container}>
      <ContainerImage url={data.poster_path} isRounded />

      {data.title && <Text>{data.title}</Text>}
      <br />
      {data.release_date && <Text>{formatDate(data.release_date)}</Text>}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

MovieCardItem.propTypes = {
  data: PropTypes.object,
};
