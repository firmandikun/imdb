import React from 'react';
import FeaturedVideo from '../components/FeaturedVideo/FeaturedVideo';
import VideoCard from '../components/VideoCard/VideoCard';
import MovieCard from '../components/MovieCard/MovieCard';
import useBannerMovies from '../hooks/useBannerMovies';

const topPicks = [
  { title: "Star Wars: Episode V", posterUrl: "https://images.unsplash.com/photo-1611787640592-ebf78080d96e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 8.7 },
  { title: "Spider-Man: Across the Spider-Verse", posterUrl: "https://plus.unsplash.com/premium_photo-1682125157065-cbc4eb0fe0bb?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 8.6 },
  { title: "Interstellar", posterUrl: "https://example.com/interstellar.jpg", rating: 8.7 },
  { title: "Arrival", posterUrl: "https://example.com/arrival.jpg", rating: 7.9 },
  { title: "Inception", posterUrl: "https://example.com/inception.jpg", rating: 8.8 },
  { title: "The Lord of the Rings", posterUrl: "https://example.com/lotr.jpg", rating: 8.8 },
];

const HomePage: React.FC = () => {
  const {data: newMovie, isSuccess: isSuccessNewMovies} = useBannerMovies()

  const dataNewMoviews = newMovie?.results.map((itm: any) => ({
    title: itm?.title,
    subtitle: itm?.overview,
    poster_path: process.env.REACT_APP_IMAGE + itm?.poster_path,
    duration: itm?.vote_count
  }))

  return (
    <main className="bg-gray-900">
    <div className=" container mx-auto p-4">
      <div className="flex space-x-8">
      <div className="w-3/4">
        <FeaturedVideo
          title="'Inside Out 2' Make us Feel Every Emotion"
          subtitle="Watch the new 'Inside out' Trailer"
          image={`${process.env.REACT_APP_IMAGE}${newMovie?.results[0]?.poster_path}`}
        />
      </div>
      <div className="w-1/4">
        <h2 className="text-xl font-bold mb-4 text-white">Featured Videos</h2>
        {dataNewMoviews?.slice(0,4).map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Top Picks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {topPicks.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Popular</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {topPicks.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  </main>
  )
};

export default HomePage;