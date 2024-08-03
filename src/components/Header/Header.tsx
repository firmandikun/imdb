import React from 'react';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = () => (
  <header className="bg-black text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-6">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb" className="h-8" />
      <nav className="space-x-4">
        {['Movies', 'TV Shows', 'Celebs', 'Watch', 'Awards', 'Community'].map((item) => (
          <a key={item} href="#" className="hover:text-yellow-400">
            {item}
          </a>
        ))}
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search IMDb"
          className="bg-white text-black px-4 py-2 rounded-full w-64"
        />
        <button className="absolute right-2 top-2">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      {['Watchlist', 'Sign In', 'EN'].map((item) => (
        <a key={item} href="#" className="hover:text-yellow-400">
          {item}
        </a>
      ))}
    </div>
  </header>
);

export default Header;