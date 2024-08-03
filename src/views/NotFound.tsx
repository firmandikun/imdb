import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-2xl mb-8">Oops! Page not found</p>
    <p className="text-xl mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
    <Link to="/" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
      Go to Homepage
    </Link>
  </div>
);

export default NotFound;