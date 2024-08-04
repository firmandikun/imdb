import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL:  process.env.REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTMwNzViYjIxOWMwNTRiYjI2MjMyMmUzYjQwZDA5MiIsIm5iZiI6MTcyMjY3MTYyMC4yMTEyNzksInN1YiI6IjY2YWRkZjgzY2YwN2Y0MWI4MjIxZWM5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9eOYtGUUzCg-De--mi7CjtR3_-PkKWDR_YpI3iqqNkQ`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized. Redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
