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
      p5.randomSeed(700);
      for (var j = 0; j <= 700; j++) {
        p5.fill(
          p5.random(120, 255),
          p5.random(120, 255),
          p5.random(120, 255),
          p5.random(80, 150)
        );
        p5.circle(
          p5.random(p5.windowWidth),
          p5.random(p5.windowHeight),
          p5.random(4)
        );
      }
    };

    p5.draw = () => {
      // if (color === "mars") {
      //   p5.fill(255,0,0)
      // }; // Conditional based on passed
      p5.ellipseMode(p5.CENTER);
      p5.ellipse(p5.windowWidth / 2, p5.windowHeight / 2, 300);
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
