import React, { useContext, UseEffect } from "react";
import { motion } from "framer-motion";
import "./LightWrapper.scss";
import { AppState } from "../AppStateProvider/AppStateProvider";

const sectionColors = {
  hero: "#d74856",
  about: "#526999",
  contact: "#eab208d5",
  skills: "#377937",
  project: "#a955f7c9",
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
          // animate={{
          //   x: [0, 40, 0],
          // }}
          // transition={{
          //   duration: 6,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          // }}
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
