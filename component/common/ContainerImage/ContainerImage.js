import React from 'react';
import PropTypes from 'prop-types';

import { Image, StyleSheet } from 'react-native';

export default function ContainerImage({ url, isRounded }) {
  if (!url) {
    return null;
  }

  return (
    <div style={styles.container}>
      <Image
        source={{
          uri: `http://image.tmdb.org/t/p/w185/${url}`,
        }}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '1em',
    marginBottom: '1em',
  },
});

ContainerImage.propTypes = {
  url: PropTypes.string.isRequired,
  isRounded: PropTypes.bool,
};
