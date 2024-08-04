// movieReducer.ts

export interface Movie {
  id: string;
  title: string;
  releaseYear: string;
  rating: string;
  duration: string;
  posterUrl: string;
  trailerUrl: string;
  overviewItems: string[];
  genres: string[];
  description: string;
  director: string;
  writers: string[];
  stars: string[];
  awards: string;
  reviews: {
    userReviews: string;
    criticReviews: string;
    metascore: string;
  };
  reviewsCount: string;
  markCount: number;
}

type MovieState = any;

interface SetMovieAction {
  type: 'SET_MOVIE';
  payload: Movie;
}

interface ClearMovieAction {
  type: 'CLEAR_MOVIE';
}

type MovieAction = SetMovieAction | ClearMovieAction;

const movieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    case 'CLEAR_MOVIE':
      return null;
    default:
      return state;
  }
};

export { movieReducer };
