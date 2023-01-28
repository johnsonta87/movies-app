import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Filter, Title } from '..';
import { useFetchList } from '../../queries';
import { listState } from '../../recoil/atom';
import MovieCardItem from '../common/Card/MovieCardItem';
import { MoviesListStyles } from './MoviesListStyles';

export default function MoviesList() {
  const [popularFilter] = useState([
    'streaming',
    'on tv',
    'for rent',
    'in theatres',
  ]);

  const [list, setList] = useState([]);

  const listTypeState = useRecoilValue(listState);
  const { data, isLoading } = useFetchList(listTypeState);

  useEffect(() => {
    if (data && !isLoading) {
      setList(data);
    }
  }, [data, isLoading]);

  if (!list.results) {
    return null;
  }

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <Title title={listTypeState.type} />
      <Filter options={popularFilter} isSimple isSecondaryQuery />

      <MoviesListStyles>
        {list.results.map((item) => (
          <MovieCardItem key={item.id} data={item} />
        ))}
      </MoviesListStyles>
    </div>
  );
}
