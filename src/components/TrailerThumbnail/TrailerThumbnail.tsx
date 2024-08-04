import React from 'react';

interface TrailerThumbnailProps {
  src: string;
  alt: string;
}

const TrailerThumbnail: React.FC<TrailerThumbnailProps> = ({ src, alt }) => (
  <div className="w-2/4">
    <div className="aspect-w-16 aspect-h-9 mb-4">
      <img src={src} alt={alt} className="w-full h-[500px] object-cover rounded-lg" />
    </div>
  </div>
);

export default TrailerThumbnail;
