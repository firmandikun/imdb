import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getBannerMovies } from '../service/banner';

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

const LOCAL_STORAGE_KEY = 'bannerMovies';

const saveDataToLocalStorage = (data: MoviesResponse) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

const getDataFromLocalStorage = (): MoviesResponse | null => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

const useBannerMovies = () => {
  return useQuery<MoviesResponse, Error>({
    queryKey: ['upcomingMovies'],
    queryFn: async () => {
      const response = await getBannerMovies();
      saveDataToLocalStorage(response);
      return response;
    },
    onSuccess: (data) => {
      saveDataToLocalStorage(data)
    }
  });
};

export default useBannerMovies;
