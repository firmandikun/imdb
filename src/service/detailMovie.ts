import { getData } from "../config/useRequest";

const apikey = process.env.REACT_APP_APIKEY

export const getDetailMovies =  (id: number) => {
  const response =  getData(`/movie/${id}?api_key=${apikey}`);
  return response;
};