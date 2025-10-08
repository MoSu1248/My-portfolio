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
  const { isMobile } = useContext(AppState);

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
        //   initial={{ scale: 0.2, opacity: 0 }}
        //   animate={{ scale: 1, opacity: 1 }}
        //   exit={{ scale: 0.2, opacity: 0 }}
        //   transition={{
        //     scale: {
        //       type: "spring",
        //       damping: 14,
        //       stiffness: 40,
        //       duration: viewAll ? 0.8 : 0.3,
        //       delay: viewAll ? 2.5 : 0,
        //     },
        //   }}
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
