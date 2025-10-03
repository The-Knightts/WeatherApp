import "./App Copy.css";
import { useEffect, useState } from "react";

// Import weather icons from src/assets
import clearIcon from "./assets/clear.png";
import rainIcon from "./assets/rain.png";
import cloudIcon from "./assets/cloud.png";
import drizzleIcon from "./assets/drizzle.png";
import snowIcon from "./assets/snow.png";
import humidityIcon from "./assets/humidity.png";
import windIcon from "./assets/wind.png";

const getData = async (BASE_URL) => {
  const data = await (await fetch(BASE_URL)).json();
  return data;
};

function WeatherApp() {
  const [location, setLocation] = useState("Mumbai");
  const [weatherIcon, setWeatherIcon] = useState(clearIcon);
  const [data, setData] = useState({});

  const API_KEY = "37cab66e1ddf83b375c76dcd6e664d4f";
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    getData(BASE_URL).then((fetched_data) => {
      setData(fetched_data);
      if (fetched_data.weather && fetched_data.weather[0]) {
        setWeatherIcon(getWeatherIcon(fetched_data.weather[0].main));
      }
      console.log(fetched_data);
    });
  }, [location]);

  // Map API weather condition → imported icon
  const getWeatherIcon = (icon) => {
    switch (icon.toLowerCase()) {
      case "clear":
        return clearIcon;
      case "rain":
        return rainIcon;
      case "clouds":
        return cloudIcon;
      case "drizzle":
        return drizzleIcon;
      case "snow":
        return snowIcon;
      default:
        return clearIcon;
    }
  };

  return (
    <div className="weather">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            console.log(location);
          }}
          placeholder="Search"
        />
      </div>

      {/* Weather Icon + Temp/Location */}
      <div className="align">
        <img src={weatherIcon} alt="weather" className="weather-icon" />
        <div className="content">
          <p className="temperature">
            {data.main?.temp ? Math.round(data.main?.temp) : ".."}°C
          </p>
          <p className="location">{data.name}</p>
        </div>
      </div>

      {/* Extra Weather Info */}
      <div className="weather-data">
        <div className="col">
          <img src={humidityIcon} alt="humidity" />
          <div>
            <p>{data.main?.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={windIcon} alt="wind" />
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
