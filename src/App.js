import React, { useState } from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);    
  const handleClick = () => {
      setDarkMode(!darkMode);
  }
    
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <div>
        <button className='button1' type="button" onClick={handleClick}>
          { darkMode ? 'Change to LightMode' : 'Change to DarkMode' }
        </button>
      </div>  
      <Characters />
    </div>
  );
}

export default App;