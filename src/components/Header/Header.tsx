import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from './Header.types';
import Input from '../Base/input/Input';
import Button from '../Base/button/button';

const Header: React.FC<HeaderProps> = () => (
  <header className="bg-black text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-6">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb" className="h-8" />
      </Link>
      <nav className="space-x-4">
        {['Movies', 'TV Shows', 'Celebs', 'Watch', 'Awards', 'Community'].map((item) => (
          <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-yellow-400">
            {item}
          </Link>
        ))}
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      <Input
        placeholder="Search IMDb"
        icon={
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      />
      {['Watchlist', 'Sign In'].map((item) => (
        <Button key={item} variant="secondary">
          <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>
            {item}
          </Link>
        </Button>
      ))}
      <Button variant="secondary">EN</Button>
    </div>
  </header>
);

export default Header;