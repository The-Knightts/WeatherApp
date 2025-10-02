import React from "react";
import WeatherCard from "./WeatherApp";

const App = () => {
  return (
    <>
      {/* Background Video */}
      <div className="background-container">
        <video autoPlay loop muted playsInline>
          <source src={process.env.PUBLIC_URL + "/bg.mp4"} type="video/mp4" />
        </video>
      </div>
      <WeatherCard />
    </>
  );
};

export default App;
