import React from 'react';

interface MovieOverviewProps {
  items: string[];
}

const MovieOverview: React.FC<any> = ({ items }) => (
  <div className="w-1/4">
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Overview</h2>
      <ul className="space-y-2">
        {items?.map((item: any) => (
          <li key={item} className="hover:text-yellow-400 cursor-pointer">{item?.name}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default MovieOverview;
