import React from 'react';

interface MovieDetailsProps {
  director: string;
  writers: string[];
  stars: string[];
  awards: string;
  reviews: any
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ director, writers, stars, awards, reviews }) => (
  <div>
    <div className="mb-2"><span className="font-bold">Director:</span> {director}</div>
    <div className="mb-2"><span className="font-bold">Writers:</span> {writers}</div>
    <div className="mb-2"><span className="font-bold">Stars:</span> {stars}</div>
    <div className="mb-2"><span className="font-bold">Awards:</span> {awards}</div>
    <div>
      <span className="font-bold">Reviews:</span>
      <span className="ml-2">{reviews} User Reviews</span>
      <span className="mx-2">•</span>
      <span>{reviews} Critic Reviews</span>
      <span className="mx-2">•</span>
      <span className="bg-green-600 text-white px-2 py-1 rounded">{reviews} Metascore</span>
    </div>
  </div>
);

export default MovieDetails;
