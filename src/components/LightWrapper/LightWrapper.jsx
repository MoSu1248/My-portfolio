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

  const color = sectionColors[currentSection] || "#5178b3";

  const lights = Array.from({ length: count }, () => ({
    color,
  }));

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
      {lights.map((light, i) => (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5, x: [0, 80, 0] }}
          transition={{
            scale: { delay: 0.5, duration: 1.5, ease: "easeOut" },
            opacity: { delay: 0.5, duration: 1.5, ease: "easeOut" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          key={i}
          className={`light-${i} light-styling`}
          style={{
            position: "absolute",
            width: `600px`,
            height: `600px`,
            borderRadius: "50%",
          
            filter: "blur(100px)",
            backgroundColor: light.color,
          }}
        />
      ))}
    </div>
  );
};

export default LightWrapper;
