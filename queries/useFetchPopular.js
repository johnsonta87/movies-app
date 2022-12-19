import { useQuery } from '@tanstack/react-query';
import { getPopular } from '../api/services';

export default function useFetchPopular() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['getPopular'],
    queryFn: getPopular,
  });

  return { isLoading, error, data };
}
