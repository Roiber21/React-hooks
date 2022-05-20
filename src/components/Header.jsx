import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext';


const Header = () => {
  const color=useContext(ThemeContext)


    return (
   <div className="header">
       <h1 style={{color}} >ReactHooks</h1>
       <h2>Rick and Morty</h2>
    
   </div>
    );
}

export default Header;