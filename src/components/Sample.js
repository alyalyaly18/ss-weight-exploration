import p5 from "p5";
import React from "react";
import { useEffect } from "react";

const Sample = () => {
  const Sketch = (p5) => {
    let radius;
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.background(0);
      radius = 0;
    };

    p5.draw = () => {
      p5.ellipse(p5.width / 2, p5.height / 2, radius, radius);
      radius++;
    };
  };

  useEffect(() => {
    new p5(Sketch);
  }, []);

  return <></>;
};

export default Sample;
