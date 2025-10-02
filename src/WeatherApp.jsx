import "./App Copy.css";
import { useEffect, useState } from "react";
import search_icon from "./assets/search.png";
import rain_icon from "./assets/rain.png";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import snow_icon from "./assets/snow.png";
import wind_icon from "./assets/wind.png";
import humidity_icon from "./assets/humidity.png";

const getData = async(BASE_URL)=>{
  let data = (await fetch(BASE_URL)).json()
  return data
} 

function WeatherApp() {
  const [location, setLocation] = useState('Mumbai')
  const [weatherIcon, setWeatherIcon] = useState(clear_icon)
  const [data, setData] = useState({})

  const API_KEY = '37cab66e1ddf83b375c76dcd6e664d4f'
  const BASE_URL =
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&&units=metric`  //String Interpolation


  useEffect(()=>{
    getData(BASE_URL).then((fetched_data)=>{
      setData(fetched_data)
      setWeatherIcon(getWeatherIcon(fetched_data.weather[0].main));
      console.log(fetched_data)
    })
  },[location])

  const getWeatherIcon = (Icon) => {
    switch (Icon.toLowerCase()) {
      case "clear":
        return clear_icon;
      case "rain":
        return rain_icon;
      case "clouds":
        return cloud_icon;
      case "drizzle":
        return drizzle_icon;
      case "snow":
        return snow_icon;
      default:
        return clear_icon;
    }
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input 
          type="text" 
          value={location} 
          id="" 
          onChange={(e) => {
            setLocation(e.target.value)
            console.log(location)
          }}
          placeholder="Search" 
        />
      </div>
      <div className="align">
        <img src={weatherIcon} alt="weather" className="weather-icon" />
        <div className="content">
          <p className="temperature">{data.main?.temp ?Math.round(data.main?.temp):'..'}°C</p>
          <p className="location">{data.name}</p> 
        </div>
      </div>

      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
            <p>{data.main?.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind" />
          <div>
            <p>{data.wind?.speed} Km/hr</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;