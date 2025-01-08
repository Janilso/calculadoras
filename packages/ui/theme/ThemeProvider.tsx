import React, { PropsWithChildren } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import './global.css';
import { AppTheme } from './DefaultTheme';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={AppTheme}>{children}</MuiThemeProvider>;
};
