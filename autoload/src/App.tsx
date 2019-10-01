import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LandingPage from './Pages/LandingPage';

const Fonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
`;

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontFamily: "Lato, Arial, sans-serif",
  color: "#4f4d4f",
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
