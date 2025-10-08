import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import AllCards from "./Components/AllCards";
import ViewMoreBtn from "../../projects/ViewMoreBtn";
import "./AllAssignments.scss";
import ProjectArchiveCard from "./Components/ProjectArchiveCard";
import LeetCodeCard from "./Components/LeetCodeCard";
import { AppState } from "../../../components/AppStateProvider/AppStateProvider";
import MobileAllAssignments from "./Mobile/MobileAllAssignments";
export default function AllAssignments({
  projects,
  onClick,
  viewAll,
  loading,
  leetCode,
  openLesser,
}) {
  const { setLightboxOpen, isMobile } = useContext(AppState);

  useEffect(() => {
    setLightboxOpen(true);
    return () => setLightboxOpen(false);
  });

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

  useEffect(() => {
    if (!viewAll) {
      containerX.set(0);
      containerY.set(0);
    }
  }, [viewAll]);

  return isMobile ? (
    <MobileAllAssignments
      key="all"
      openLesser={openLesser}
      projects={isMobile ? projects.slice(0, 7) : projects.slice(0, 7)}
      onClick={onClick}
      viewAll={viewAll}
      leetCode={leetCode}
    />
  ) : (
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
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.2, opacity: 0 }}
          transition={{
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 40,
              duration: viewAll ? 0.8 : 0.3,
              delay: viewAll ? 2.5 : 0,
            },
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
          <ProjectArchiveCard openLesser={openLesser} />
          <LeetCodeCard leetCode={leetCode} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
