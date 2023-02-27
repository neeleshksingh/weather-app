
import { useState } from 'react';
import './App.css';


function App() {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])

  const handleSearch = () =>{
    if(search !== ''){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8c078b7d5c71f260570371ee6b6b765b`)
      .then(res => res.json())
      .then(data =>{
        setWeather(data)
      }).catch(e=>{
        alert(e)
      })
    }
  }

  return (
    <div className="App">
      <div className='con1 flex-col'>
        <h1>Weather App</h1>
        <div className='search'>
          <input type="text" placeholder='Enter City Name' onChange={(e)=>{setSearch(e.target.value)}}/>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className='con2 flex-col'>
        <h2>Weather Details of City :</h2>
        <h2>Current Temperature :</h2>
        <h2>Temperature Range :</h2>
        <h2>Humidity :</h2>
        <h2>Sea Level :</h2>
        <h2>Ground Level :</h2>
      </div>
    </div>
  );
}

export default App;
