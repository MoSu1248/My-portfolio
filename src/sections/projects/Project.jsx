import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { motion, AnimatePresence, useSpring, animate } from "framer-motion";
import { db } from "../../firebase/firebase";
import ProjectsGrid from "./ProjectsGrid";
import { useMotionValue } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

import ProjectGridWrapper from "./ProjectGridWrapper";

import "./projects.scss";
import ViewMoreBtn from "./ViewMoreBtn";

const Project = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const containerY = useMotionValue(0);
  const containerX = useMotionValue(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(query(collection(db, "projects")));
      const initialData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(initialData.filter((project) => project.order !== undefined));
      setAllProjects(initialData);
    };
    fetchProjects();
  }, []);

  const handleViewMore = () => {
    setProjects(allProjects);
    setViewAll(true);
  };

  const handleViewLess = () => {
    setProjects(projects.filter((project) => project.order !== undefined));
    setViewAll(false);
    animate(containerX, 0, { duration: 0.1, ease: "easeOut" });
    animate(containerY, 0, { duration: 0.1, ease: "easeOut" });
  };

  const smoothX = useSpring(containerX, { stiffness: 25, damping: 20 });
  const smoothY = useSpring(containerY, { stiffness: 25, damping: 20 });

  const handleMouseMove = (e) => {
    if (!viewAll) return;
    const maxShiftX = 200;
    const maxShiftY = 200;

    const moveX = (e.clientX / window.innerWidth - 0.5) * 2 * -maxShiftX;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 2 * -maxShiftY;

    containerX.set(moveX);
    containerY.set(moveY);
  };

  const handleSelectProject = (project) => setSelectedProject(project);
  const handleBack = () => setSelectedProject(null);

  return (
    <section
      ref={ref}
      id="project"
      className="project-section"
      onMouseLeave={() => {
        animate(containerX, 0, { duration: 0.3, ease: "easeOut" });
        animate(containerY, 0, { duration: 0.3, ease: "easeOut" });
      }}
    >
      <ProjectGridWrapper
        viewAll={viewAll}
        containerX={smoothX}
        containerY={smoothY}
        onMouseMove={handleMouseMove}
      >
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={handleBack} />
        ) : (
          <motion.div key="grid" layout className="project-grid-container">
            <ProjectsGrid
              projects={projects}
              viewAll={viewAll}
              onSelect={setSelectedProject}
            />
          </motion.div>
        )}
      </ProjectGridWrapper>
      <ViewMoreBtn
        viewAll={viewAll}
        handleViewMore={handleViewMore}
        handleViewLess={handleViewLess}
      />
    </section>
  );
});
export default Project;
