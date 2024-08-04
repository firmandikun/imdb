import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from './Header.types';
import Input from '../Base/input/Input';
import Button from '../Base/button/button';

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb" className="h-8" />
          </Link>
          <div className="hidden lg:flex lg:items-center  flex-col md:flex-row md:space-x-4 mb-4 md:mb-0 mx-2">
            {['Movies', 'TV Shows', 'Celebs', 'Watch', 'Awards', 'Community'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-yellow-400 mb-2 md:mb-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex md:items-center w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4 md:mb-0 lg:hidden">
            {['Movies', 'TV Shows', 'Celebs', 'Watch', 'Awards', 'Community'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-yellow-400 mb-2 md:mb-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <Input
              placeholder="Search IMDb"
              icon={
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
              className="mb-2 md:mb-0"
            />
            <Button variant="secondary">Watchlist</Button>
            <Button variant="secondary">Sign In</Button>
            <Button variant="secondary">EN</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;