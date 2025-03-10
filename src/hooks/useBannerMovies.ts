import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getBannerMovies } from '../service/banner';
import { LocalStorage } from '../utils/localStorageUtils';

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

const useBannerMovies = () => {
  const localStorage = new LocalStorage()
  return useQuery<MoviesResponse, Error>({
    queryKey: ['bannerMovies'],
    queryFn: async () => {
      const response = await getBannerMovies();
      return response;
    },
    onSuccess: (data) => {
      localStorage.setItem('bannerMovies', data)
    }
  });
};

export default useBannerMovies;
