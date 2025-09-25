import React, { useContext } from "react";
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

  // Create lights array
  const lights = Array.from({ length: count }, (_, i) => ({ color, i }));

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
      {lights.map(({ color, i }) => (
        <motion.div
          key={i}
          initial={{
            scale: 0.8,
            opacity: 0,
            x: i === 0 ? -window.innerWidth : window.innerWidth,
            y: i === 0 ? -100 : 140,
          }}
          animate={{
            scale: 1,
            opacity: 0.5,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: i * 0.3,
          }}
          className={`light-${i}`}
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            filter: "blur(100px)",
            backgroundColor: color,
          }}
        >
          {/* Infinite float using Framer Motion */}
          <motion.div
            animate={{
              x: i === 0 ? [0, 80, 0] : 0,
              y: i === 0 ? 0 : [0, 80, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LightWrapper;
