import React from 'react';
import { lightTheme, darkTheme } from '../Components/Theme';


export const ThemeContext = React.createContext({
  
  theme: lightTheme,
  toggleTheme: () => {} 
  
})
