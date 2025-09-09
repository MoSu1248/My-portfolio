import React, { useContext, UseEffect } from "react";
import { motion } from "framer-motion";
import "./LightWrapper.scss";
import { AppState } from "../AppStateProvider/AppStateProvider";

const sectionColors = {
  hero: "#5178b3",
  about: "#a566f0",
  project: "#d95c66",
  skills: "#399149",
  contact: "#e3ad0f",
};

const LightWrapper = ({ count = 2 }) => {
  const { currentSection } = useContext(AppState);

  const color = sectionColors[currentSection] || "#d74856";

  const lights = Array.from({ length: count }, () => ({
    color,
    opacity: Math.random() * 0.2 + 0.05,
  }));

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
      {lights.map((light, i) => (
        <motion.div
          animate={{
            x: [0, 80, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          key={i}
          className={`light-${i} light-styling`}
          style={{
            position: "absolute",
            width: `600px`,
            height: `600px`,
            borderRadius: "50%",
            opacity: 0.5,
            filter: "blur(120px)",
            backgroundColor: light.color,
          }}
        />
      ))}
    </div>
  );
};

export default LightWrapper;
