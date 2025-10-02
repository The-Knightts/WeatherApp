import React, { useState } from 'react';
import WeatherCard from './WeatherApp';

const App = () => {
  return (
    <>
      {/* Background Video */}
      <div className="background-container">
        <video
          autoPlay
          loop
          muted
          className="background-video"
          src="/bg.mp4"
        ></video>
      </div>
    <WeatherCard/>
    </>
  );
};

export default App;
