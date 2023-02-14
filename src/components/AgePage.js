import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import InputFormAge from "./InputFormAge";
import Planet from "./Planet";
import { RxRocket } from "react-icons/rx";
import { FaWpexplorer } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

export default function AgePage() {
  const [ageDisplay, setAgeDisplay] = useState("");
  const [planetDisplay, setPlanetDisplay] = useState("");
  const [planetName, setPlanetName] = useState("Earth");

  const API = "https://api.le-systeme-solaire.net/rest/bodies";

  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth() + 1;
  let currentYear = new Date().getFullYear();

  // newUserInfo = {weight: '9', planet: 'mars'}
  const ageOnPlanet = (newUserInfo) => {
    axios
      .get(`${API}/${newUserInfo.planet}`)
      .then((res) => {
        const orbit = res.data.sideralOrbit;
        const birthMonth = newUserInfo.month;
        const birthDay = newUserInfo.day;
        const birthYear = newUserInfo.year;
        const resultAge = calculateAge(
          orbit,
          currentDay,
          currentMonth,
          currentYear,
          birthDay,
          birthMonth,
          birthYear
        );
        console.log(currentDay);
        setAgeDisplay(resultAge.toFixed(1));
        setPlanetDisplay(res.data.id);
        setPlanetName(res.data.englishName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Helper function calculate Age
  const calculateAge = (
    orbit,
    currentDay,
    currentMonth,
    currentYear,
    birthDay,
    birthMonth,
    birthYear
  ) => {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (birthDay > currentDay) {
      currentMonth = currentMonth - 1;
      currentDay = currentDay + month[birthMonth - 1];
    }

    if (birthMonth > currentMonth) {
      currentYear = currentYear - 1;
      currentMonth = currentMonth + 12;
    }

    const calculatedDate = currentDay - birthDay;
    const calculatedMonth = currentMonth - birthMonth;
    const calculatedYear = currentYear - birthYear;

    const calculatedEarthDays =
      calculatedYear * 365 + calculatedMonth * 30 + calculatedDate;
    const newAge = calculatedEarthDays / orbit;
    return newAge;
  };

  // Visibility of result age
  const newAgeDisplayVisible =
    ageDisplay !== "" ? ageDisplay + " years on " + planetName + "!" : "";
  return (
    <div className="container">
      <div className="sketch-container">
        <Planet planetDisplay={planetDisplay} />
      </div>
      <div className="info-container">
        <div className="age-directions">
          <h1>
            <FaWpexplorer />
          </h1>
          <p>Enter your birthdate on Earth in the format:</p>
          <p>MM / DD / YYYY</p>
          <p>+</p>
          <p>Choose a planet to explore</p>
        </div>
        <div className="user-input">
          <h1>
            <RxRocket />
          </h1>
          <InputFormAge calculateAgeOnPlanet={ageOnPlanet}></InputFormAge>
        </div>
        <div className="weight-display">
          <h1>
            <IoCalendarOutline />
          </h1>
          <h2>Your age is...</h2>
          <h2>{newAgeDisplayVisible}</h2>
        </div>
      </div>
      <footer className="credits">
        <p>Designed and Created by Alyssa Reyes</p>
      </footer>
    </div>
  );
}
