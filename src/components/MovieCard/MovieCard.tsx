import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  title: string;
  poster_path: string;
  rating: number;
  id: number
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster_path, rating, id }) => {
  return (
    <Link to={`/movie/${id}`} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
       <Link to={`/movie/${id}`}>
        <img src={poster_path} alt={title} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-yellow-400">{rating}</span>
          </div>
          <button className="text-blue-400 hover:text-blue-300">
            <i className="fas fa-star mr-1"></i>
            Rate
          </button>
        </div>
        <button className="mt-4 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600">
          <i className="fas fa-play mr-2"></i>
          Trailer
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;