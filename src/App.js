import React from "react";
import "./App.css";
import earth from "./images/earth.jpeg";
// import planetDropdown from "./components/planetDropdown";

// useState for weightDisplay, setWeightDisplay
function App() {
  const URL = "https://api.le-systeme-solaire.net/rest/bodies/";

  // newUserInfo = {weight: '9', planet: 'mars'}
  const newWeight = (newUserInfo) => {
    // axios get(${URL}/${newUserInfo.planet})
    // need planet choice from user input
    // need to call URL + planet name
    // then(res) => let gravity = result.data.gravity
    // let currentWeight = newUserInfo.weight
    // setWeightDisplay(calculateWeight(gravity, currentWeight))
    // catch error etc...
    return newUserInfo;
  };

  // Helper function to calculate weight of another planet
  // const calculateWeight = (gravity, currentWeight) => {
  //   const newWeight = ( int(currentWeight) / 9.81 ) * gravity )
  //   return newWeight
  // }

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
            <inputForm info={newWeight} />
          </div>
          {/* <div className="planet-dropdown">
            <planetDropdown placeHolder="Choose Planet..." />
          </div> */}
        </section>
        <section className="weight-display">
          Display calculated weight here!
        </section>
      </main>
    </div>
  );
}

export default App;
