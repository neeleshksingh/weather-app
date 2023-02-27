
import { useState } from 'react';
import './App.css';
import Weather from './components/weather';


function App() {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])

  const handleSearch = () =>{
    if(search !== ''){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8c078b7d5c71f260570371ee6b6b765b`)
      .then(res => res.json())
      .then(data =>{
        if(data.cod === 200){
          setWeather(data)
        }
        else{
          alert("Enter Valid City Name")
        }
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
          <input type="text" placeholder='Enter City Name' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className='con2 flex-col'>
        <Weather weatherdata = {weather}/>
      </div>
      <div className='last-3'>
          <h2 style={{color: 'blue'}}>Last 3 City entries</h2>

      </div>
    </div>
  );
}

export default App;
