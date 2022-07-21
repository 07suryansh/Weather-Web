
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import cloud from './cloud.png';
import { useState } from 'react';



function App() {

const url=`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=dd34722e1312392913bdae9cd8aaeca0`

const api={
  key:"dd34722e1312392913bdae9cd8aaeca0",
  base:"https://api.openweathermap.org/data/2.5/"
}

  return (
    <>
    <div className="container" style={{backgroundImage:`url(${cloud})`,height:'1000px',width:'2000px',backgroundSize:'cover',backgroundRepeat: 'no-repeat',position:"fixed"}}>
    
    <h1 className="display-1 text-center color-white $display-font-weight: 300">Weather Web</h1>

    
    </div>
    


    </>
  );
}

export default App;
