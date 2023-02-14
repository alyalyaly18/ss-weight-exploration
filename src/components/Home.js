import React from "react";
import "../App.css";
import Planet from "./Planet.js";

const Home = () => {
  const planetDisplay = "earth";

  return (
    <div className="container">
      <div className="sketch-container">
        <Planet planetDisplay={planetDisplay} />
      </div>
      <div className="info-container">
        <h2>Did you know Earth's gravity is 9.8 m/s^2?</h2>
        <p>
          The force of gravity from planet to planet is very different. This is
          because planet mass impacts planet gravity. The greater the size of
          the masess, the greater the size of gravitational force.
        </p>
      </div>
      <footer className="credits">
        <p>Designed and Created by Alyssa Reyes</p>
      </footer>
    </div>
  );
};

export default Home;
