import React from "react";
import WeatherCard from "./WeatherApp";

// Import background video
import bgVideo from "./assets/bg.mp4";

const App = () => {
  return (
    <>
      {/* Background Video */}
      <div className="background-container">
        <video autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <WeatherCard />
    </>
  );
};

export default App;
