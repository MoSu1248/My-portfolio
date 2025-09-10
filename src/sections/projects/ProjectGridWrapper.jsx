import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import React from "react";
import "./projects.scss";

export default function ProjectGridWrapper({
  viewAll,
  children,
  containerX,
  containerY,
}) {
  // const smoothX = useSpring(containerX, { stiffness: 120, damping: 100 });
  // const smoothY = useSpring(containerY, { stiffness: 120, damping: 100 });

  // const handleMouseMove = (e) => {
  //   const maxShiftX = 100;
  //   const maxShiftY = 100;

  //   const moveX = (e.clientX / window.innerWidth - 0.5) * 2 * -maxShiftX;
  //   const moveY = (e.clientY / window.innerHeight - 0.5) * 2 * -maxShiftY;

  //   containerX.set(moveX);
  //   containerY.set(moveY);
  // };
  return (
    <motion.div
      className={!viewAll ? "project-container" : "all-project-container"}
      style={{
        overflow: "hidden",
        // x: smoothX,
        // y: smoothY,
      }}
      // onMouseMove={viewAll ? handleMouseMove : undefined}
      // onMouseLeave={() => {
      //   animate(containerX, 100, { duration: 0.2, ease: "easeOut" });
      //   animate(containerY, 100, { duration: 0.2, ease: "easeOut" });
      // }}
    >
      {children}
    </motion.div>
  );
}
