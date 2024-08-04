import React from 'react';

interface ActionButtonsProps {
  rating: string;
  reviewsCount: string;
  markCount: number;
  onRateClick: () => void;
  onMarkClick: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ rating, reviewsCount, markCount, onRateClick, onMarkClick }) => (
  <div className="flex space-x-4 mb-4">
    <button onClick={onRateClick} className="bg-gray-700 px-3 py-1 rounded">Rate</button>
    <div className="flex items-center bg-gray-700 px-3 py-1 rounded">
      <span className="text-yellow-400 mr-1">★</span>
      <span>{rating} ({reviewsCount})</span>
    </div>
    <div className="bg-gray-700 px-3 py-1 rounded">{markCount}</div>
    <button onClick={onMarkClick} className="bg-gray-700 px-3 py-1 rounded">Tandai</button>
  </div>
);

export default ActionButtons;
