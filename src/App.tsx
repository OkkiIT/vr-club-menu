import React from 'react';
import './index.css';
import { Header } from 'components';
import { MainWrapper } from 'components/MainAppWrapper/styled';
import { MainPage, AllGamesPage, GamePage } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { PATHS } from 'consts/paths';

function App() {
  const { MAIN_PAGE, ALL_GAMES_PAGE, GAME_PAGE, REDIRECT } = PATHS;
  return (
    <Provider store={store}>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path={MAIN_PAGE} element={<MainPage />} />
          <Route path={ALL_GAMES_PAGE} element={<AllGamesPage />} />
          <Route path={GAME_PAGE} element={<GamePage />} />
          <Route path={REDIRECT} element={<MainPage />} />
        </Routes>
      </MainWrapper>
    </Provider>
  );
}

export default App;
