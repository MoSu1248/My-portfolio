import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import AllCards from "./AllCards";
import ViewMoreBtn from "../projects/ViewMoreBtn";
import "./AllAssignments.scss";
import AllprojectsCard from "./AllprojectsCard";
import LeetCodeCard from "./LeetCodeCard";
import { AppState } from "../../components/AppStateProvider/AppStateProvider";

export default function AllAssignments({
  projects,
  onClick,
  viewAll,
  loading,
  leetCode,
  openLesser,
}) {
  const { setLightboxOpen } = useContext(AppState);

  useEffect(() => {
    setLightboxOpen(true);
    return () => setLightboxOpen(false);
  }, []);
  const galleryWrapperRef = useRef(null);

  const containerX = useMotionValue(0);
  const containerY = useMotionValue(0);
  const smoothX = useSpring(containerX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(containerY, { stiffness: 30, damping: 20 });

  const handleMouseMove = (e) => {
    const maxShiftX = 600;
    const maxShiftY = 600;

    const moveX = (e.clientX / window.innerWidth - 0.5) * maxShiftX * -1;
    const moveY = (e.clientY / window.innerHeight - 0.5) * maxShiftY * -1;

    containerX.set(moveX);
    containerY.set(moveY);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{
        x: smoothX,
        y: smoothY,
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <motion.div className="all-container" ref={galleryWrapperRef}>
        <motion.div
          className="grid-container"
          initial={{ zoom: `20%`, translateX: `800px` }}
          animate={!loading ? { zoom: `100%`, translateX: `0px` } : {}}
          transition={{
            delay: 2.8,
            duration: 1,
            type: "spring",
            damping: 14,
            stiffness: 40,
          }}
        >
          {projects.map((project, index) => (
            <AllCards
              key={index}
              index={index}
              project={project}
              viewAll={viewAll}
              handleClick={onClick}
            />
          ))}
          <AllprojectsCard openLesser={openLesser} />
          <LeetCodeCard leetCode={leetCode} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
