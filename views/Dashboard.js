import { useState } from 'react';
import { MoviesList, Filter } from '../component';
import Container from '../component/common/Layouts/Container';

export default function Dashboard() {
  const [filters] = useState(['popular', 'trending', 'upcoming']);

  return (
    <Container>
      <Filter options={filters} />

      <MoviesList category="" />
    </Container>
  );
}
