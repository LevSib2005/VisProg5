export type ColorMode = 'light' | 'dark';

export interface ThemeConfig {
  initialColorMode: ColorMode;
  useSystemColorMode: boolean;
}

export interface CustomTheme {
  config: ThemeConfig;
  colors: {
    primary: string;
    secondary: string;
    background: {
      light: string;
      dark: string;
    };
    text: {
      light: string;
      dark: string;
    };
    card: {
      light: string;
      dark: string;
    };
  };
}