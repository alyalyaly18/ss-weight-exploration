import p5 from "p5";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import mars from "../images/mars.jpeg";
import earth_daymap from "../images/earth_daymap.jpeg";
import jupiter from "../images/jupiter.jpeg";
import mercury from "../images/mercury.jpeg";
import neptune from "../images/neptune.jpeg";
import saturn from "../images/saturn.jpeg";
import uranus from "../images/uranus.jpeg";
import venus_atmosphere from "../images/venus_atmosphere.jpeg";

const Planet = ({ planetDisplay }) => {
  console.log("render planet:", planetDisplay);
  // tear down canvas and rerender with passed in props
  const containerRef = useRef(); // Read more on why necessary.

  const sketch = (p5) => {
    let planetTexture = null;
    p5.preload = () => {
      console.log(planetDisplay);
      if (planetDisplay === "mars") {
        planetTexture = p5.loadImage(mars);
      } else if (planetDisplay === "jupiter") {
        planetTexture = p5.loadImage(jupiter);
      } else if (planetDisplay === "mercure") {
        planetTexture = p5.loadImage(mercury);
      } else if (planetDisplay === "neptune") {
        planetTexture = p5.loadImage(neptune);
      } else if (planetDisplay === "saturne") {
        planetTexture = p5.loadImage(saturn);
      } else if (planetDisplay === "uranus") {
        planetTexture = p5.loadImage(uranus);
      } else if (planetDisplay === "venus") {
        planetTexture = p5.loadImage(venus_atmosphere);
      } else {
        planetTexture = p5.loadImage(earth_daymap);
      }
    };

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
      p5.rotateY(p5.frameCount * 0.01);
      p5.noStroke();
      p5.texture(planetTexture);
      p5.sphere(200); // use the props as the radius
      // p5.ellipse(p5.windowWidth / 2, p5.windowHeight / 2, 300);
    };
  };

  useEffect(() => {
    let inst = new p5(sketch, containerRef.current);
    return () => inst.remove();
  }, [planetDisplay]); // pass in props to rerender the sketch canvas only when radius and texture are changed
  return <div ref={containerRef}></div>;
};

export default Planet;
