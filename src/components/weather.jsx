const Weather = ({weatherdata}) =>{
    return(
        <div>
            {weatherdata.name !== undefined ? (
                <div className="weth flex-col">
                    <h3>Weather Details of City : {weatherdata.name}</h3>
                    <h3>Current Temperature : {weatherdata.main.temp} °C</h3>
                    <h3>Temperatue Range : {weatherdata.main.temp_max} °C to {weatherdata.main.temp_min} °C</h3>
                    <h3>Humidity : {weatherdata.main.humidity}</h3>
                    <h3>Sea Level : {weatherdata.main.sea_level}</h3>
                </div>
            ):null}
        </div>
    )
}
export default Weather