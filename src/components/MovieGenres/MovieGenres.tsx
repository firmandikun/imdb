import React from 'react';

const MovieGenres: React.FC<any> = ({ genres }) => (
  <div className="mb-4">
    {genres?.map((genre: any) => (
      <span key={genre} className="bg-gray-700 text-sm px-2 py-1 rounded mr-2">{genre?.name}</span>
    ))}
  </div>
);

export default MovieGenres;
