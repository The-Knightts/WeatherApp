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
    <>
      {/* Background Video */}
      <div className="background-container">
        <video
          autoPlay
          loop
          muted
          className="background-video"
          src="/videos/3330652-uhd_3840_2160_30fps.mp4"
        ></video>
      </div>
      
      {/* Main Content
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 relative z-10">
        <div className="bg-gray-100 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <header className="bg-blue-500 bg-opacity-90 text-white p-4">
            <h1 className="text-2xl font-semibold text-center">Weather App</h1>
          </header>

          <main className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                placeholder="Enter city name..."
                className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700"
              >
                Get Weather
              </button>
            </form>
            // {weatherData && <WeatherCard data={weatherData} />}
          </main>

          <footer className="bg-gray-200 bg-opacity-90 text-gray-600 p-4 text-center">
            <p>&copy; 2024 Weather App. All rights reserved.</p>
          </footer>
        </div>
      </div> */}
    <WeatherCard data={weatherData}/>
    </>
  );
};

export default App;
