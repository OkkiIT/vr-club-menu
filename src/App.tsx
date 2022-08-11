import React from 'react';
import './index.css';
import { Header } from './components';
import { MainWrapper } from './components/MainAppWrapper/styled';
import { MainPage,AllGamesPage } from './pages';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:activity/:type" element={<AllGamesPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </MainWrapper>
    </>
  );
}

export default App;
