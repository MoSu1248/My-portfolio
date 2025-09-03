import React, { UseEffect } from "react";
import { motion } from "framer-motion";
import "./LightWrapper.scss";

const sectionColors = {
  hero: "#d74856", // red-ish glow
  about: "#35b374ff", // teal glow
  contact: "#f39923ff", // yellow glow
  skills: "#1d4d7aff",
  project: "#3ab9bdff",
};

const LightWrapper = ({ count = 2, currentSection }) => {
  const color = sectionColors[currentSection] || "#ffffff";

  console.log(currentSection);

  const lights = Array.from({ length: count }, () => ({
    color,
    opacity: Math.random() * 0.2 + 0.05,
  }));

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
      {lights.map((light, i) => (
        <motion.div
          animate={{
            y: [0, 105, 0],
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
            opacity: 0.3,
            filter: "blur(100px)",
            backgroundColor: light.color,
          }}
        />
      ))}
    </div>
  );
};

export default LightWrapper;
