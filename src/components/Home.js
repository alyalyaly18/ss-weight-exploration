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
      <div class="hwrap">
        <div class="hmove">
          <div class="hitem">EXPLORE MORE</div>
          <div class="hitem">EXPLORE MORE</div>
          <div class="hitem">EXPLORE MORE</div>
          <div class="hitem">EXPLORE MORE</div>
        </div>
      </div>
      <footer className="credits">
        <p>Designed and Created by Alyssa Reyes</p>
      </footer>
    </div>
  );
};

export default Home;
