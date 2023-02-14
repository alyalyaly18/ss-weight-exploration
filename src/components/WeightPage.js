import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";
// import Navbar from "./Navbar";
import InputForm from "./InputForm";
import Planet from "./Planet";
import { FaWpexplorer } from "react-icons/fa";
import { IoScaleOutline } from "react-icons/io5";
import { RxRocket } from "react-icons/rx";

export default function WeightPage() {
  const [weightDisplay, setWeightDisplay] = useState("");
  const [planetDisplay, setPlanetDisplay] = useState("");
  const [planetName, setPlanetName] = useState("Earth");

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
        setPlanetName(res.data.englishName);
        // console.log(res.data.englishName);
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
    weightDisplay !== "" ? weightDisplay + " on " + planetName + "!" : "";

  return (
    <div className="container">
      <main>
        <div className="sketch-container">
          <Planet planetDisplay={planetDisplay} />
        </div>
        <div className="info-container">
          <div className="directions">
            <h1>
              <FaWpexplorer />
            </h1>
            <p>
              Enter your weight on Earth (units unnecessary) and choose the
              planet you'd like to explore. Click "calculate" to determine your
              mass on another.
            </p>
            <p>
              Observe the surface of the planet using your mouse to move around,
              zoom in and zoom out of the planet.
            </p>
          </div>
          <div className="user-input">
            <h1>
              <RxRocket />
            </h1>
            <InputForm calculateWeightOnPlanet={weightOnPlanet}></InputForm>
          </div>
          <div className="weight-display">
            <h1>
              <IoScaleOutline />
            </h1>
            <h2>Your weight is...</h2>
            <h2>{newWeightDisplayVisible}</h2>
          </div>
        </div>
      </main>
      <footer className="credits">
        <p>Designed and Created by Alyssa Reyes</p>
      </footer>
    </div>
    // </div>
  );
}
