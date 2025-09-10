import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./projectCard";
import "./projects.scss";

export default function ProjectsGrid({ projects, onSelect, viewAll }) {
  const galleryRef = useRef(null);

  // Mouse move effect
  useEffect(() => {
    const handleMove = (e) => {
      if (!galleryRef.current || !viewAll) return;

      const gallery = galleryRef.current;
      const rect = gallery.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const maxShiftX = 400;
      const maxShiftY = 400;

      const deltaX = ((centerX - e.clientX) / rect.width) * maxShiftX;
      const deltaY = ((centerY - e.clientY) / rect.height) * maxShiftY;

      gallery.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
    };

    const container = document.querySelector(".project-section");
    if (container) container.addEventListener("mousemove", handleMove);

    // Reset transform on cleanup
    return () => {
      if (container) container.removeEventListener("mousemove", handleMove);
      if (galleryRef.current)
        galleryRef.current.style.transform = "translate(-50%, -50%)";
    };
  }, [viewAll]);

  return (
    <div className="project-section">
      <AnimatePresence>
        <div className="container">
          <div className="gallery" ref={galleryRef}>
            {projects.map((project, index) => (
              <motion.div
                key={`row-${index}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="row"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onSelect={onSelect}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
