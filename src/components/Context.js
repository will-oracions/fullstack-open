import React from 'react';

const themes = {
  light: {
    foreground: '#000',
    background: '#eee',
  },
  dark: {
    foreground: '#fff',
    background: '#222',
  },
};

const ThemeContext = React.createContext(themes.light);

const ThemeButton = () => {
  const theme = React.useContext(ThemeContext);
  return <button style={{background: theme.background, color: theme.foreground}}>I am styled by theme context</button>
}

const Toolbar = () => {
  return (
    <ThemeButton />
  );
}

const Context = () => {
  return (
    <>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />      
      </ThemeContext.Provider>
    </>
  );
}

export default Context;