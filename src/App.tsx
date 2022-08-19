import React from 'react';
import './index.css';
import { Header } from './components';
import { MainWrapper } from './components/MainAppWrapper/styled';
import { MainPage, AllGamesPage, GamePage } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:activity/:type" element={<AllGamesPage />} />
          <Route path="*" element={<MainPage />} />
          <Route path="/:activity/:type/:id" element={<GamePage/>}/>
        </Routes>
      </MainWrapper>
    </Provider>
  );
}

export default App;
