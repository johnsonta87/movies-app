import React from 'react';

import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <main style={styles.container}>{children}</main>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: '65em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

Container.propTypes = {
  children: PropTypes.array,
};
