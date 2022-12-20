import { useState } from 'react';
import { Popular } from '../component';
import Container from '../component/common/Layouts/Container';
import FilterSelector from '../component/FilterSelector/FilterSelector';

export default function Dashboard() {
  const [popularFilter] = useState([
    'streaming',
    'on tv',
    'for rent',
    'in theatres',
  ]);

  return (
    <Container>
      <FilterSelector heading="What's Popular" options={popularFilter} />
      <Popular />
    </Container>
  );
}
