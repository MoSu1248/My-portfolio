import React, { useContext, useEffect } from "react";
import AllCards from "../Components/AllCards";
import ProjectArchiveCard from "../Components/ProjectArchiveCard";
import LeetCodeCard from "../Components/LeetCodeCard";
import { motion } from "framer-motion";
import "./MobileAllAssignments.scss";
import { AppState } from "../../../../components/AppStateProvider/AppStateProvider";
import MobileCards from "./MobileCards";

export default function MobileAllAssignments({
  projects,
  onClick,
  viewAll,
  leetCode,
  openLesser,
}) {
  const { isMobile, setLightboxOpen } = useContext(AppState);
 

  //   useEffect(() => {
  //     if (!isMobile || !viewAll) return;

  //     const container = document.body;

  //     const preventScroll = (e) => e.preventDefault();

  //     container.addEventListener("touchmove", preventScroll, { passive: false });
  //     container.addEventListener("wheel", preventScroll, { passive: false });

  //     return () => {
  //       container.removeEventListener("touchmove", preventScroll);
  //       container.removeEventListener("wheel", preventScroll);
  //     };
  //   }, [isMobile, viewAll]);

  return (
    <motion.div className="all-container-mobile ">
      <motion.div
        className="mobile-grid-container"
      >
        {projects.map((project, index) => (
          <MobileCards
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
  );
}
