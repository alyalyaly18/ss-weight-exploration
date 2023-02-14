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
          <div class="hitem">What kind of tea can you not have in Space?</div>
          <div class="hitem">Gravity</div>
          <div class="hitem">Why is gravity so weak?</div>
          <div class="hitem">Because it doesn't lift.</div>
        </div>
      </div>
      <footer className="credits">
        <p>Designed and Created by Alyssa Reyes</p>
      </footer>
    </div>
  );
};

export default Home;
