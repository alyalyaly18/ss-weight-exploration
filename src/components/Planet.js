import p5 from "p5";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Planet = () => {
  // how to pass in parameter function from app.js
  // use color as parameter to change sketch
  // const color = calculateWeightOnPlanet.planet;
  const containerRef = useRef();

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.background(0);
    };

    p5.draw = () => {
      // if (color === "mars") {
      //   p5.fill(255,0,0)
      // }; // Conditional based on passed
      p5.circle(400, 400, 100);
    };
  };
  useEffect(() => {
    new p5(sketch, containerRef.current);
  }, []);

  return <div ref={containerRef}></div>;
};

// p5 Planet Canvas
// const customPlanet = Planet(100);
// let myp5 = new p5(customPlanet);

export default Planet;
