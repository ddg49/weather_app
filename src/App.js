import {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import Info from './components/Info'

function App() {

  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: "",
    desc: "",
    min: "", //mintemp
    max: "", //maxtemp
  })

  const apiKey = "83d771826b943ea3acc20160d7ce77ff";

  // The zip is your API query parameter. These queries belong after the '?' in API URLs. This is the input you pass in to return data from an API. In this instance, you are passing in a zip code to return the weather data of that area.
  const getWeather = async (zip) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`)
    const data = await response.json() 
    setWeatherData({
      city: data.name,
      temp: data.main.temp,
      desc: data.weather[0].description,
      min: data.main.temp_min,
      max: data.main.temp_max
    })
  }
  console.log(weatherData)
  useEffect(()=> {getWeather("91320")}, [])

  return (
    <div className="App">
      <h1>Find Local Weather</h1>
      <Form getWeather={getWeather}/>
      <Info city={weatherData.city} temp={weatherData.temp} desc={weatherData.desc} min={weatherData.min} max={weatherData.max} />
    </div>
  );
}

export default App;
