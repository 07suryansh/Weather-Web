import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
const [data,setData]=useState({})
const [location,setLocation]=useState('')

const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=dd34722e1312392913bdae9cd8aaeca0`

const searchLocation=(event)=>{
  if(event.key==='Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }

}

const api={
  key:"dd34722e1312392913bdae9cd8aaeca0",
  base:"https://api.openweathermap.org/data/2.5/"
}

  return (
    
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event=>setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter location"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
        <div className="location"><h2>{data.name}</h2></div>
        <div className="temp">
          {data.main?<h1>{(data.main.temp)}°C</h1>:null}
         
          </div>
        
        </div>
        
        {data.name!=undefined &&
        <div className="bottom">
        <div className="description">
          {data.weather?<p>{data.weather[0].main}</p>:null}
          
          <h4>Description</h4>
          </div>
          <div className="feels">
            {data.main? <p>{(data.main.feels_like)}°C</p>:null}
           
            <h4>Feels like</h4>
            </div>
          <div className="humidity">
            {data.main?<p>{data.main.humidity}</p>:null}
            
            <h4>Humidity</h4>
            </div>
        </div>
        }

        
      </div>
    </div>
  );
}

export default App;
