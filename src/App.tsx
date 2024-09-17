import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer'; 
import AddToHomeScreenButton from './components/AddToHomeScreenButton';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`h-[100%] w-[100%] flex flex-col justify-center items-center px-2 scrollbar ${
        isDarkMode ? 'bg-slate-800' : 'bg-white' 
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> 
      <Hero isDarkMode={isDarkMode} /> 
      <AddToHomeScreenButton/>
      <Footer /> 
    </div>
  );
}