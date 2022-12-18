import React, { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { useFetchLatest } from '../queries';
import { latestState } from '../recoil/atom';
import { Latest } from '../component';

export default function Dashboard() {
  const [latest, setLatest] = useRecoilState(latestState);
  const { data, isLoading } = useFetchLatest(550);

  useEffect(() => {
    if (data && !isLoading) {
      setLatest(data);
    }
  }, [data, isLoading]);

  console.log(latest);

  return <Latest list={latest} />;
}
