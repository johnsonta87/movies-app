import { Latest, Popular } from '../component';
import Container from '../component/common/Layouts/Container';

export default function Dashboard() {
  return (
    <Container>
      <Popular />
      <Latest />
    </Container>
  );
}
