import React from "react";
import Navigation from "..//Components/Navigation";
//import Counter from '../components/Counter'
import Hero from "..//Components/Hero";
import Main from "..//Components/Main";
import Footer from "..//Components/Footer";
import ThemeProvider from "../Components/ThemeProvider";
import { lightTheme, darkTheme } from '../Components/Theme';
import { ThemeContext } from '../Components/ThemeContext';
import { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
  <>
   <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: theme.background, color: theme.text }}>
        <Navigation />
        <Hero />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
    </>
  );
}


export default Home;
