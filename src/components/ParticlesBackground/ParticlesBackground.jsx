import React, { useEffect } from "react";
import { ParticlesConfig } from "./particlesConfig";
import "particles.js";

const ParticlesComponent = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", ParticlesConfig);
    } else {
      console.error("particles.js is not loaded");
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesComponent;
