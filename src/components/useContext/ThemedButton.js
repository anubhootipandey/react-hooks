import React, {useContext} from 'react';
const ThemeContext = React.createContext('dark');

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
  return <button theme={theme}>I am styled bt Theme Context.</button>
}

export default ThemedButton;