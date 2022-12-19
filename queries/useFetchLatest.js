import { useQuery } from '@tanstack/react-query';
import { getLatest } from '../api/services';

export default function useFetchLatest() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['getLatest'],
    queryFn: getLatest,
  });

  return { isLoading, error, data };
}
