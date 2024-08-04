import React from 'react';

interface MoviePosterProps {
  src: string;
  alt: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ src, alt }) => (
  <div className="w-1/4">
    <img src={src} alt={alt} className="w-full h-[500px] rounded-lg" />
  </div>
);

export default MoviePoster;
