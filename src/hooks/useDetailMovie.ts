import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getBannerMovies } from '../service/banner';
import { LocalStorage } from '../utils/localStorageUtils';
import { getDetailMovies } from '../service/detailMovie';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}

interface MoviesResponse {
  results: Movie[];
}

const useGetMovieDetail = (id: number | any) => {
  const localStorage = new LocalStorage()
  return useQuery<any, Error>({
    queryKey: ['detail_movie'],
    queryFn: async () => {
      const response = await getDetailMovies(id);
      return response;
    },
    onSuccess: (data) => {
      localStorage.setItem('upcomingMovies', data)
    }
  });
};

export default useGetMovieDetail;
