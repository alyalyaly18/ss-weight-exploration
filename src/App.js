import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import InputForm from "./components/InputForm";
import earth from "./images/earth.jpeg";

function App() {
  const [weightDisplay, setWeightDisplay] = useState("");
  const [planetDisplay, setPlanetDisplay] = useState("");

  const API = "https://api.le-systeme-solaire.net/rest/bodies";

  // newUserInfo = {weight: '9', planet: 'mars'}
  const weightOnPlanet = (newUserInfo) => {
    // Triggerd by click even in InputForm
    axios
      .get(`${API}/${newUserInfo.planet}`)
      .then((res) => {
        const gravity = res.data.gravity;
        const currentWeight = newUserInfo.weight;
        const resultWeight = calculateWeight(gravity, currentWeight);
        console.log(resultWeight);
        setWeightDisplay(resultWeight.toFixed(1));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Helper function to calculate weight of another planet
  const calculateWeight = (gravity, currentWeight) => {
    let currentWeightInt = parseInt(currentWeight);
    const newWeight = (currentWeightInt / 9.81) * gravity;
    return newWeight;
  };

  // Visibility of result weight
  const newWeightDisplayVisible =
    weightDisplay !== ""
      ? "You weigh " + weightDisplay + " on the new planet!"
      : "";

  return (
    <div className="container">
      <header>
        <section>
          <h1 id="site-title">Exploring Weight on Other Worlds</h1>
        </section>
      </header>
      <main>
        <section className="sketch-canvas">
          <img src={earth} alt="the earth"></img>
        </section>
        <section className="directions">
          Directions go here - will need to toggle.
        </section>
        <section className="user-input">
          User input, planet menu and calculate button go here.
          <div>
            <InputForm calculateWeightOnPlanet={weightOnPlanet}></InputForm>
          </div>
          {/* Dropdown menu of planets */}
        </section>
        <section className="weight-display">
          {newWeightDisplayVisible}
          {/* You would weigh {weightDisplay} on the new planet! */}
        </section>
        {/* Change new planet to use state */}
      </main>
    </div>
  );
}

export default App;
