import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/Home';
import Header from './components/Header/Header';
import NotFound from './views/NotFound';
import Footer from './components/Footer/Footer';

const queryClient = new QueryClient(
  {
    defaultOptions : {
      queries: {
        refetchInterval: false,
        refetchOnWindowFocus: false,
      }
    }
  }
)

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </QueryClientProvider>
  );
};

export default App;
