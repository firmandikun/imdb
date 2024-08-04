import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { movieReducer } from './movieReducer';
import { LocalStorage } from '../utils/localStorageUtils';

interface MovieContextProps {
  movie: any;
  setMovie: (movie: any) => void;
  clearMovie: () => void;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [movie, dispatch] = useReducer(movieReducer, null);
  const local = new LocalStorage();

  const setMovie = (movie: any) => {
    dispatch({ type: 'SET_MOVIE', payload: movie });
  };

  const clearMovie = () => {
    dispatch({ type: 'CLEAR_MOVIE' });
  };

  useEffect(() => {
    if (movie) {
      const existingMovies = local.getItem('movie_detail');
      
      const moviesArray: any = Array.isArray(existingMovies) ? existingMovies : [];
      
      const updatedMovies = [...moviesArray, movie];
      
      local.setItem('movie_detail', updatedMovies);
    }
  }, [movie]); 

  return (
    <MovieContext.Provider value={{ movie, setMovie, clearMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = (): MovieContextProps => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovie must be used within a MovieProvider');
  }
  return context;
};
