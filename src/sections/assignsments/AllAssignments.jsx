import {
  animate,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";
import AllCards from "./AllCards";
import ViewMoreBtn from "../projects/ViewMoreBtn";

import "./AllAssignments.scss";
export default function AllAssignments({
  projects,
  onClick,
  handleViewLess,
  viewAll,
}) {
  const galleryWrapperRef = useRef(null);

  const containerX = useMotionValue(0);
  const containerY = useMotionValue(0);
  const smoothX = useSpring(containerX, { stiffness: 25, damping: 20 });
  const smoothY = useSpring(containerY, { stiffness: 25, damping: 20 });

  const handleMouseMove = (e) => {
    const maxShiftX = 600;
    const maxShiftY = 900;

    const moveX = (e.clientX / window.innerWidth - 0.5) * maxShiftX * -1;
    const moveY = (e.clientY / window.innerHeight - 0.5) * maxShiftY * -1;

    containerX.set(moveX);
    containerY.set(moveY);
  };

  const handleMouseLeave = () => {
    animate(containerX, 0, { duration: 0.2 });
    animate(containerY, 0, { duration: 0.2 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <motion.div className="all-container" ref={galleryWrapperRef}>
        <motion.div className="grid-container">
          {projects.slice(0, 9).map((project, index) => (
            <AllCards
              project={project}
              viewAll={viewAll}
              handleClick={onClick}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
