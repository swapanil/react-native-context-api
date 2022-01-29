import {React} from 'react';

const theme = {
  light: {
    background: '#fafafa',
    foreground: '#0a0a0a',
  },
  dark: {
    background: '#3b3a39',
    foreground: '#f7f7f7',
  },
};

const ThemeContext = React.createContext();

const ThemeProvider = ThemeContext.Provider;

const ThemeConsumer = ThemeContext.Consumer;
