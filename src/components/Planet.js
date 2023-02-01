import p5 from "p5";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import mars from "../images/mars.jpeg";

const Planet = ({ planetDisplay }) => {
  // texture and radius props (planetDisplay)
  // tear down canvas and rerender with passed in props
  // use color as parameter to change sketch
  const containerRef = useRef(); // is a useRef necessary?

  // let planetTexture = "";
  // if (planetDisplay === "mars") {

  // Helper function for planet texture?

  const sketch = (p5) => {
    let planetTexture;
    if (planetDisplay === "mars") {
      p5.preload = () => {
        planetTexture = p5.loadImage(mars);
      };
    }

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
      p5.background(0);
      p5.randomSeed(700);
      for (let j = 0; j <= 700; j++) {
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
      p5.noStroke();
      p5.rotateY(p5.frameCount * 0.01);
      p5.texture(planetTexture);
      p5.ellipse(0, 0, 400); // use the props as the radius
      // p5.ellipse(p5.windowWidth / 2, p5.windowHeight / 2, 300);
    };
  };
  // new p5(sketch);
  useEffect(() => {
    // will need to return clean-up method
    let inst = new p5(sketch, containerRef.current);
    return () => inst.remove;
  }, [planetDisplay]); // pass in props to rerender the sketch canvas only when radius and texture are change
  // issue with wanting sketch passed in but does not work, why?
  // return <div>{Planet}</div>;
  return <div ref={containerRef}></div>;
};

// p5 Planet Canvas
// const customPlanet = Planet(100);
// let myp5 = new p5(customPlanet);

export default Planet;
