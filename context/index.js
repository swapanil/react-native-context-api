import React, {useState} from 'react';

const Themes = {
  light: {
    background: '#fafafa',
    foreground: '#0a0a0a',
  },
  dark: {
    background: '#3b3a39',
    foreground: '#f7f7f7',
  },
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ThemeContext.Provider;

export const ThemeConsumer = ThemeContext.Consumer;

export const AppProvider = props => {
  const {children} = props;
  const [currentTheme, setCurrentTheme] = useState('light');
  const [theme, setTheme] = useState(Themes.light);

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      setTheme(Themes.dark);
      setCurrentTheme('dark');
    } else {
      setTheme(Themes.light);
      setCurrentTheme('light');
    }
  };

  return (
    <ThemeProvider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}>
      {children}
    </ThemeProvider>
  );
};
