import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

import { lightTheme, darkTheme } from './styles/Theme';
import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Cadastro />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
