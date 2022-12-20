import React, { useEffect, useState } from 'react';
import { useFetchPopular } from '../../queries';
import MovieCardItem from '../common/Card/MovieCardItem';
import { PopularStyle } from './PopularStyles';

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
    <PopularStyle>
      {list.results.map((item) => (
        <MovieCardItem key={item.id} data={item} />
      ))}
    </PopularStyle>
  );
}
