import React from 'react';

import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ContainerImage from '../ContainerImage/ContainerImage';

export default function MovieCardItem({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div style={styles.container}>
      <Text>{data.title}</Text>
      <ContainerImage url={data.poster_path} isRounded />
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
