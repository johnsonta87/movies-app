import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFetchPopular } from '../../queries';
import MovieCardItem from '../common/Card/MovieCardItem';
import Title from '../common/Title';

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
    <div>
      <Title title="Popular" />

      <div style={styles.list}>
        {list.results.map((item) => (
          <MovieCardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    overflow: 'hidden',
  },
});
