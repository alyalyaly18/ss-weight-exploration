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
    // <div className="background">
    //   <div className="container">
    //     <header>
    //       <section>
    //         <span className="font-face-o">
    //           <h1 id="site-title">
    //             <b>Gravity's Pull</b>
    //           </h1>
    //           <h2 id="site-tagline">Exploring Weight on Other Worlds</h2>
    //         </span>
    //       </section>
    //     </header>
    //     <main>
    //       <div className="sketch-container">
    //         <Planet planetDisplay={planetDisplay} />
    //       </div>
    //       <div className="info-container">
    //         <div className="directions">
    //           <h1>
    //             <FaWpexplorer />
    //           </h1>
    //           <p>
    //             Enter your weight on Earth (units unnecessary) and choose the
    //             planet you'd like to explore. Click "calculate" to determine
    //             your mass on another.
    //           </p>
    //           <p>
    //             Observe the surface of the planet using your mouse to move
    //             around, zoom in and zoom out of the planet.
    //           </p>
    //         </div>
    //         <div className="user-input">
    //           <h1>
    //             <RxRocket />
    //           </h1>
    //           <InputForm calculateWeightOnPlanet={weightOnPlanet}></InputForm>
    //         </div>
    //         <div className="weight-display">
    //           <h1>
    //             <IoScaleOutline />
    //           </h1>
    //           <h2>Your weight is...</h2>
    //           <h2>{newWeightDisplayVisible}</h2>
    //         </div>
    //       </div>
    //     </main>
    //     <footer>
    //       <p>Designed and Created by Alyssa Reyes</p>
    //     </footer>
    //   </div>
    // </div>
  );
}

export default App;
