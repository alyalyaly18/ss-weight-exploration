import React from "react";
// import { useState } from "react";
// import axios from "axios";
import "./App.css";
import AgePage from "./components/AgePage";
import Home from "./components/Home";
import WeightPage from "./components/WeightPage";
import Navbar from "./Navbar";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/weight":
      Component = WeightPage;
      break;
    case "/age":
      Component = AgePage;

    // no default
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
