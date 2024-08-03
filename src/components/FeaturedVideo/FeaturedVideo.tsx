import React from 'react';
import { FeaturedVideoProps } from './FeaturedVideo.types';

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ title, subtitle, image }) => (
  <div className="relative">
    <img src={image} alt={title} className="w-full h-[500px] object-cover" />
    <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black to-transparent w-full">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg">{subtitle}</p>
      <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-bold flex items-center">
        <span className="mr-2">▶</span> Play
      </button>
    </div>
  </div>
);

export default FeaturedVideo;