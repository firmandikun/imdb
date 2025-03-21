import React from 'react';
import Button from '../Base/button/button';
import { footerLinks } from './footerLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <Button variant="primary" className="mb-6">
          Unlock the full IMDb experience – Sign up now
        </Button>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {footerLinks.map((link: any, index: number) => (
            <a key={index} href={link.url} className="hover:text-white">
              {link.title}
            </a>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-2xl hover:text-white">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#" className="text-2xl hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-2xl hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-2xl hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-2xl hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p className="text-center">© 1990-2024 by IMDb.com, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;