import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material';

type TestProps = {
  children: React.ReactNode;
};

export const RouteTest = ({ children }: TestProps) => {
  <BrowserRouter>{children}</BrowserRouter>;
};

export const ThemeTest = ({ children }: TestProps) => {
  <ThemeProvider theme={createTheme({})}>{children}</ThemeProvider>;
};

test('to be ignored', () => {});
