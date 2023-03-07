import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import Route from './routes/Route';
import { lightTheme, darkTheme } from './styles/Theme';
import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <RouterProvider router={Route} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
