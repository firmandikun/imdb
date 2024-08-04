import axiosInstance from "../config/axiosInstance";
import { getData } from "../config/useRequest";

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

// export const getBannerMovies = async (): Promise<MoviesResponse> => {
//   try {
//     const response = await axiosInstance.get<{ results: Movie[] }>('/movie/upcoming?language=en-US&page=1');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching upcoming movies:', error);
//     throw error;
//   }
// };
const apikey = process.env.REACT_APP_APIKEY

export const getBannerMovies =  () => {
  const response =  getData(`/movie/now_playing?api_key=${apikey}`);
  return response;
};