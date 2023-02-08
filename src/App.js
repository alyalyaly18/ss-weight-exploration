import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import InputForm from "./components/InputForm";
import Planet from "./components/Planet";

function App() {
  const [weightDisplay, setWeightDisplay] = useState("");
  const [planetDisplay, setPlanetDisplay] = useState("");

  const API = "https://api.le-systeme-solaire.net/rest/bodies";

  // newUserInfo = {weight: '9', planet: 'mars'}
  const weightOnPlanet = (newUserInfo) => {
    // Triggerd by click event in InputForm
    axios
      .get(`${API}/${newUserInfo.planet}`)
      .then((res) => {
        const gravity = res.data.gravity;
        const currentWeight = newUserInfo.weight;
        const resultWeight = calculateWeight(gravity, currentWeight);
        setWeightDisplay(resultWeight.toFixed(1));
        setPlanetDisplay(res.data.id);
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
          <Planet planetDisplay={planetDisplay} />
        </section>
        <section className="directions">
          Directions: input your weight in the form below and choose a planet
          you'd like to visit. Click calculate to see your weight on another
          world! *Toggle*
        </section>
        <section className="user-input">
          <div>
            <InputForm calculateWeightOnPlanet={weightOnPlanet}></InputForm>
          </div>
        </section>
        <section className="weight-display">{newWeightDisplayVisible}</section>
      </main>
    </div>
  );
}

export default App;
