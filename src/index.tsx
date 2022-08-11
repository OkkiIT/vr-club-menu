import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './consts/styles';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={ThemeContext}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
