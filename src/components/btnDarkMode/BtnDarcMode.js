import { useState, useEffect, useRef } from 'react';

import './style.css';

//Картинки
import sun from "./sun.svg";
import moon from "./moon.svg";


const BtnDarcMode = () => {

   const[darkMode, setDarkMode] = useState('light');
   const btnRef = useRef(null);

   useEffect(()=>{

      if(darkMode === 'dark'){
         document.body.classList.add('dark')
         btnRef.current.classList.add('dark-mode-btn--active')
      }else{
         document.body.classList.remove('dark')
         btnRef.current.classList.remove('dark-mode-btn--active')
      }

   }, [darkMode])

   const toggleDarcMode  = ()=>{
      setDarkMode((curentValue)=> curentValue === 'light'? 'dark': 'light')
   }

   return ( 
      
       <button ref ={btnRef} className="dark-mode-btn" onClick={toggleDarcMode}>
         <img className="dark-mode-btn__icon" src={sun} alt="Light mode"/>
         <img className="dark-mode-btn__icon" src={moon} alt="Dark mode"/>
      </button>

    );
}
 
export default BtnDarcMode;