import axiosInstance from "../config/axiosInstance";
import { getData } from "../config/useRequest";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}

const apikey = process.env.REACT_APP_APIKEY

export const getBannerMovies =  () => {
  const response =  getData(`/movie/now_playing?api_key=${apikey}`);
  return response;
};

