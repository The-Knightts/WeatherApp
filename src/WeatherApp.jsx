import "./App Copy.css";
import { useEffect, useState } from "react";

const getData = async (BASE_URL) => {
  let data = (await fetch(BASE_URL)).json();
  return data;
};

function WeatherApp() {
  const [location, setLocation] = useState("Mumbai");
  const [weatherIcon, setWeatherIcon] = useState(
    import.meta.env.BASE_URL + "/.assets/clear.png"
  );
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

  // Map API weather condition → local image inside public/assets/
  // Weather icon
  const getWeatherIcon = (icon) => {
    switch (icon.toLowerCase()) {
      case "clear":
        return import.meta.env.BASE_URL + "assets/clear.png";
      case "rain":
        return import.meta.env.BASE_URL + "assets/rain.png";
      case "clouds":
        return import.meta.env.BASE_URL + "assets/cloud.png";
      case "drizzle":
        return import.meta.env.BASE_URL + "assets/drizzle.png";
      case "snow":
        return import.meta.env.BASE_URL + "assets/snow.png";
      default:
        return import.meta.env.BASE_URL + "assets/clear.png";
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
          <img
            src={import.meta.env.BASE_URL + "assets/humidity.png"}
            alt="humidity"
          />
          <div>
            <p>{data.main?.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={import.meta.env.BASE_URL + "assets/wind.png"} alt="wind" />
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
