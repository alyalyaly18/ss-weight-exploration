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
import star from "../images/star.png";
// import meteor from "../images/meteor.webp";
import uranus from "../images/uranus.jpeg";
import venus_atmosphere from "../images/venus_atmosphere.jpeg";

const Planet = ({ planetDisplay }) => {
  console.log("render planet:", planetDisplay);
  // tear down canvas and rerender with passed in props
  const containerRef = useRef(); // Read more on why necessary.

  const sketch = (p5) => {
    let planetTexture = null;
    // let star = null;
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
        star = p5.loadImage(star);
      }
    };

    p5.setup = () => {
      p5.createCanvas(600, 600, p5.WEBGL);
      p5.imageMode(p5.CENTER);
      p5.noStroke();
      // windowWidth and windowHeight
    };

    p5.draw = () => {
      // p5.background(0);
      p5.clear();
      p5.orbitControl(4, 4);

      // Bright star
      // theSolar();
      p5.push();
      p5.translate(0, 0, -2500);
      p5.image(star, 0, 0, 1340, 1200);
      p5.pop();

      // Directional light not working
      let dx = p5.mouseX - p5.width / 2;
      let dy = p5.mouseY - p5.height / 2;
      let v = p5.createVector(dx, dy, 0);
      v.div(150);

      if (p5.mouseIsPressed === true) {
        p5.directionalLight(255, 255, 255, v);
      }

      // Planet
      p5.push();
      p5.rotateY(p5.frameCount * 0.01);
      p5.texture(planetTexture);
      p5.sphere(100); // use the props as the radius
      // // p5.ellipse(p5.windowWidth / 2, p5.windowHeight / 2, 300);
      p5.pop();
    };

    // const theSolar = () => {
    //   p5.push();
    //   p5.translate(0, 0, -2500);
    //   p5.image(star, 0, 0);
    //   p5.pop();

    //   // Directional light not working
    //   let dx = p5.mouseX - p5.width / 2;
    //   let dy = p5.mouseY - p5.height / 2;
    //   let v = p5.createVector(dx, dy, 0);
    //   v.div(150);

    //   if (p5.mouseIsPressed === true) {
    //     p5.directionalLight(255, 255, 255, v);
    //   }
    // };
  };

  useEffect(() => {
    let inst = new p5(sketch, containerRef.current);
    return () => inst.remove();
  }, [planetDisplay]); // pass in props to rerender the sketch canvas only when radius and texture are changed
  return <div ref={containerRef}></div>;
};

export default Planet;
