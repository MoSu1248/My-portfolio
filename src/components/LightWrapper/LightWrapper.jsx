import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./LightWrapper.scss";
import { AppState } from "../AppStateProvider/AppStateProvider";
const LightWrapper = ({ count = 2 }) => {
  const { currentSection, currentSubsection } = useContext(AppState);
  const [projectColor, setProjectColor] = useState("#d95c66");

  useEffect(() => {
    if (currentSection === "project") {
      setProjectColor(currentSubsection === "all" ? "#c45550" : "#d95c66");
    }
  }, [currentSection, currentSubsection]);

  const sectionColors = {
    hero: "#5178b3",
    about: "#a566f0",
    project: projectColor,
    skills: "#399149",
    contact: "#ffb347",
  };

  const color = sectionColors[currentSection] || "#5178b3";

  const lights = Array.from({ length: count }, (_, i) => ({ color, i }));

  const [animationStage, setAnimationStage] = useState("swoop");

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStage("continuous"), 5000);
    return () => clearTimeout(timer);
  }, []);

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
          animate={
            animationStage === "swoop"
              ? {
                  scale: 1,
                  opacity: 0.5,
                  x: 0,
                  y: 0,
                }
              : {
                  scale: [1, 1.02, 1],
                  opacity: 0.5,
                  x: i === 0 ? [0, -80, 0] : [0, 70, 0],
                  y: i === 0 ? [0, 20, 0] : [0, -25, 0],
                }
          }
          transition={
            animationStage === "swoop"
              ? { duration: 2, ease: "easeOut", delay: i * 0.3 }
              : {
                  repeat: Infinity,
                  duration: 6 + i,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }
          }
          className={`light-${i}`}
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            filter: "blur(100px)",
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

export default LightWrapper;
