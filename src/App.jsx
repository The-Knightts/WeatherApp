import React, { useState } from 'react';
import WeatherCard from './WeatherApp';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState();

  const fetchWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=37cab66e1ddf83b375c76dcd6e664d4f&units=metric`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="object-center mx-80 mt-20">
      <div className="max-h-screen bg-gray-100">
        <header className="bg-blue-500 text-black p-4">
          <h1 className="text-2xl font-semibold text-center">Weather App</h1>
        </header>

        <main className="container p-8">
          <form onSubmit={handleSubmit} className="mb-10">
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter city name..."
              className="w-full px-4 py-2 border rounded-lg my-8"
            />
            <button
              type="submit"
              className="bg-blue-500 text-black px-4 py-2 ml-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Get Weather
            </button>
          </form>
          {weatherData && <WeatherCard data={weatherData} />}
        </main>

        <footer className="bg-gray-200 text-gray-600 p-4 text-center">
          <p>&copy; 2024 Weather App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
