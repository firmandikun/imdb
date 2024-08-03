import React from 'react';
import { VideoCardProps } from './VideoCard.types';

const VideoCard: React.FC<VideoCardProps> = ({ title, subtitle, image, duration }) => (
  <div className="flex space-x-4 mb-4">
    <img src={image} alt={title} className="w-24 h-36 object-cover" />
    <div>
      <h3 className="font-bold text-gray-400">{title}</h3>
      <p className="text-sm text-gray-400">{subtitle}</p>
      <p className="text-sm text-gray-400">{duration}</p>
    </div>
  </div>
);

export default VideoCard;