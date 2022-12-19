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
        style={styles.image(isRounded)}
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
  image: (rounded) => ({
    width: '150px',
    height: '225px',
    borderRadius: rounded ? '4px' : '0',
    overflow: 'hidden',
  }),
});

ContainerImage.propTypes = {
  url: PropTypes.string.isRequired,
  isRounded: PropTypes.bool,
};
