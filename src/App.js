
import { useState } from 'react';
import './App.css';
import Weather from './components/weather';


function App() {
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])
  const [lastSearch, setLastSearch] = useState([])
  const [showlast, setShowlast] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = () => {
    if (search !== '') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8c078b7d5c71f260570371ee6b6b765b`)
        .then(res => res.json())
        .then(data => {
          if (data.cod === 200) {
            setWeather(data)
            setLastSearch(prev => [search, ...prev.slice(0, 2)])
            setShowlast(true)
            setError('')
          }
          else {
            setError("Enter Valid City Name")
          }
        }).catch(e => {
          setError(e.message)
        })
    }
    else {
      setShowlast(false)
      setLastSearch(prev => {
        const update = [...prev]
        if (update.length === 3) {
          update.pop()
        }
        if(search !== '' && !update.includes(search)){
          update.unshift(search)
        }
        return update
      })
    }
  }
  return (
    <div className="App">
      <div className='con1 flex-col'>
        <h1>Weather App</h1>
        <div className='search'>
          <input type="text" placeholder='Enter City Name' value={search} onChange={(e) => { setSearch(e.target.value) }} />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <div>
          <h2 className='err'>{error}</h2>
        </div>}
      </div>
      <div className='con2 flex-col'>
        <Weather weatherdata={weather} />
      </div>
      {showlast && (
        <div className='last-3 flex-col'>
          <h2 style={{ color: 'blue' }}>Last 3 City entries</h2>
          <ul>
            {lastSearch.map((city, index) => {
              return <li key={index}>{city}</li>
            })}
          </ul>
        </div>
      )}

    </div>
  );
}

export default App;
