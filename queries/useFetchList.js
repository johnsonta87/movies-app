import { useQuery } from '@tanstack/react-query';
import { getMoviesList } from '../api/services';

export default function useFetchList(params) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['getMoviesList', params],
    queryFn: () => getMoviesList(params),
  });

  return { isLoading, error, data };
}
