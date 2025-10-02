import React, { useState } from "react";
import WeatherCard from "./WeatherApp";

const App = () => {
  return (
    <>
      {/* Background Video */}
      <div className="background-container">
        <video autoPlay loop muted playsInline>
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>
      <WeatherCard />
    </>
  );
};

export default App;
