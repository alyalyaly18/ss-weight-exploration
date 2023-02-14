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
import uranus from "../images/uranus.jpeg";
import venus_atmosphere from "../images/venus_atmosphere.jpeg";

const Planet = ({ planetDisplay }) => {
  // tear down canvas and rerender with passed in props
  const containerRef = useRef(); // Read more on why necessary.

  const sketch = (p5) => {
    let planetTexture = null;
    let starPos = [];

    p5.preload = () => {
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
      p5.createCanvas(760, 440, p5.WEBGL);
      // 960, 540
      // windowWidth and windowHeight

      p5.colorMode(p5.HSB);
      p5.angleMode(p5.DEGREES);
      p5.imageMode(p5.CENTER);

      p5.noStroke();

      // Populate stars array
      for (let i = 0; i < 1000; i++) {
        let theta = p5.random(180);
        let phi = p5.random(360);
        // spherical coordinates
        let pos = p5.createVector(
          1500 * p5.sin(theta) * p5.cos(phi),
          1500 * p5.cos(theta),
          1500 * p5.sin(theta) * p5.sin(phi)
        );
        let brightness = p5.random(30, 60);
        starPos.push([pos, brightness]);
      }
    };

    p5.draw = () => {
      p5.clear();
      p5.orbitControl(4, 4);

      // Distant stars
      stars();
      // Bright star
      theHypergiant();

      // Planet
      p5.push();
      p5.rotateY(p5.frameCount * 0.1);
      p5.texture(planetTexture);
      p5.sphere(100);
      // // p5.ellipse(p5.windowWidth / 2, p5.windowHeight / 2, 300);
      p5.pop();
    };

    const theHypergiant = () => {
      p5.push();
      p5.translate(0, 0, -2500);
      p5.image(star, 0, 0, 1340, 1200);
      p5.pop();

      let dx = p5.mouseX - p5.width / 2;
      let dy = p5.mouseY - p5.height / 2;
      let v = p5.createVector(dx, dy, 0);
      v.div(150);

      if (p5.mouseIsPressed === true) {
        p5.directionalLight(0, 0, 255, v);
      }
    };

    const stars = () => {
      p5.push();
      p5.strokeWeight(2);

      p5.beginShape(p5.POINTS);
      for (let i = 0; i < starPos.length; i++) {
        p5.stroke(0, 0, starPos[i][1]);
        p5.vertex(starPos[i][0].x, starPos[i][0].y, starPos[i][0].z);
      }
      p5.endShape();
      p5.pop();
    };
  };

  useEffect(() => {
    let inst = new p5(sketch, containerRef.current);
    return () => inst.remove();
  }, [planetDisplay]); // pass in props to rerender the sketch canvas only when radius and texture are changed
  return <div className="ref-container" ref={containerRef}></div>;
};

export default Planet;
