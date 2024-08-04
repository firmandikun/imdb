import React from 'react';
import { VideoCardProps } from './VideoCard.types';

const VideoCard: React.FC<VideoCardProps> = ({ title, subtitle, poster_path, duration }) => (
  <div className="flex space-x-4 mb-4">
    <img src={poster_path} alt={title} className="w-24 h-24 object-cover" />
    <div>
      <h3 className="font-bold text-gray-400">{title}</h3>
      <p className="text-sm text-gray-400 overflow-hidden overflow-ellipsis " style={{ WebkitLineClamp: 1, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
        {subtitle}
      </p>
      <p className="text-sm text-gray-400">{duration}</p>
    </div>
  </div>
);

export default VideoCard;
