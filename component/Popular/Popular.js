import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFetchPopular } from '../../queries';
import MovieCardItem from '../common/Card/MovieCardItem';

export default function Popular() {
  const [list, setList] = useState([]);
  const { data, isLoading } = useFetchPopular();

  useEffect(() => {
    if (data && !isLoading) {
      setList(data);
    }
  }, [data, isLoading]);

  if (!list.results) {
    return null;
  }

  return (
    <div style={styles.list}>
      {list.results.map((item) => (
        <MovieCardItem key={item.id} data={item} />
      ))}
    </div>
  );
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    overflow: 'hidden',
  },
});
