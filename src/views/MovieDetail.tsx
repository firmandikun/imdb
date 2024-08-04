import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActionButtons from '../components/ActionButtons/ActionButtons';
import MoviePoster from '../components/MoviePoster/MoviePoster';
import TrailerThumbnail from '../components/TrailerThumbnail/TrailerThumbnail';
import MovieOverview from '../components/MovieOverview/MovieOverview';
import MovieGenres from '../components/MovieGenres/MovieGenres';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import useGetMovieDetail from '../hooks/useDetailMovie';
import { useMovie } from '../context/MovieContext';
import { LocalStorage } from '../utils/localStorageUtils';

const MovieDetail: React.FC = () => {
  const { id } = useParams<string>();
  const { data: newMovie, isSuccess, isError, error } = useGetMovieDetail(id);
  const local = new LocalStorage()
  const {setMovie} = useMovie()
  const [active, setActive] = useState<boolean>(false)

  const dataList = local.getItem<any>('bannerMovies');
  const dataListOffline = local.getItem<any>('movie_detail');
  const storedMovie = dataList?.results?.find((itm: any) => itm?.id?.toString() === id?.toString());
  const storedMovieOffline = dataListOffline?.some((itm: any) => itm?.id?.toString() === id?.toString());

  const movieData = navigator.onLine && isSuccess  && newMovie  || storedMovie

  const handleRateClick = () => {
    console.log('Rate button clicked');
  };

  const handleMarkClick = (itm: any) => {
    console.log('Mark button clicked', itm);
    setActive(true)
    setMovie(itm)
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{movieData?.title}</h1>
        <div className="text-sm text-gray-400 mb-4">
          {movieData?.release_date} • {movieData?.popularity} • {movieData?.vote_average}
        </div>
        <ActionButtons
          rating={movieData?.popularity}
          reviewsCount={movieData?.revenue}
          markCount={movieData?.runtime}
          onRateClick={handleRateClick}
          storedMovieOffline={storedMovieOffline || active}
          onMarkClick={() => handleMarkClick(newMovie || storedMovie)}
        />
        <div className="flex space-x-8">
          <MoviePoster src={`${process.env.REACT_APP_IMAGE}${movieData?.backdrop_path}`} alt={`${movieData?.title} Poster`} />
          <TrailerThumbnail src={`${process.env.REACT_APP_IMAGE}${movieData?.poster_path}`} alt="Trailer Thumbnail" />
          <MovieOverview items={movieData?.production_companies} />
        </div>

        <MovieGenres genres={movieData?.genres} />
        <p className="mb-4">{movieData?.tagline}</p>
        <MovieDetails
          director={movieData?.belongs_to_collection?.name}
          writers={movieData?.writers}
          stars={movieData?.revenue}
          awards={movieData?.production_countries?.length && movieData?.production_countries[0]?.name}
          reviews={movieData?.reviews}
        />
      </div>
    </div>
  );
};

export default MovieDetail;
