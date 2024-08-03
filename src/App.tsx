import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/Home';
import Header from './components/Header/Header';
import NotFound from './views/NotFound';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
