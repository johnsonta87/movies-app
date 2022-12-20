import React, { useEffect, useState } from 'react';

// Hooks
import { useFetchLatest } from '../../queries';

// Components
import MovieCardItem from '../common/Card/MovieCardItem';
import Title from '../common/Title/Title';

export default function Latest() {
  const [latest, setLatest] = useState();
  const { data, isLoading } = useFetchLatest();

  useEffect(() => {
    if (data && !isLoading) {
      setLatest(data);
    }
  }, [data, isLoading]);

  return (
    <div>
      <Title title="Latest" />

      <MovieCardItem data={latest} />
    </div>
  );
}
