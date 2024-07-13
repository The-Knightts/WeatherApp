// WeatherCard.js
import React from 'react';

const WeatherCard = ({ data }) => {
  const { main, weather, name } = data;

  return (
    <div className="bg-sky-700 shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="flex items-center mt-2">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt={weather[0].description}
          className="w-10 h-10"
        />
        <p className="ml-2">{weather[0].main}</p>
      </div>
      <p className="text-3xl mt-2">{Math.round(main.temp)}°C</p>
      <p className="text-sm text-black-500 mt-2">
        Feels like {Math.round(main.feels_like)}°C
      </p>
    </div>
  );
};

export default WeatherCard;
