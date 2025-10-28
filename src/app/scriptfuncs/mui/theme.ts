import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    gradient?: {
      primaryStart: string;
      primaryEnd: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    gradient?: {
      primaryStart?: string;
      primaryEnd?: string;
    };
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    error: { main: '#f44336' },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
    },
  },
  status: {
    danger: '#f44336',
  },
  gradient: {
    primaryStart: '#1976d2',
    primaryEnd: '#42a5f5',
  },
};

export const theme = createTheme(themeOptions);