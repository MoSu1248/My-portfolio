import React, { useState, useEffect, forwardRef } from "react";
import { useMotionValue, useSpring, animate } from "framer-motion";
import { collection, getDocs, query } from "firebase/firestore";
import ProjectsGrid from "./ProjectsGrid";
import ProjectGridWrapper from "./ProjectGridWrapper";
import ProjectDetails from "./ProjectDetails";
import { db } from "../../firebase/firebase";
import "./projects.scss";
import ViewMoreBtn from "./ViewMoreBtn";

const Project = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [animationsDone, setAnimationsDone] = useState(false);

  const containerX = useMotionValue(0);
  const containerY = useMotionValue(0);
  const [mouseEnabled, setMouseEnabled] = useState(false);
  const smoothX = useSpring(containerX, { stiffness: 25, damping: 20 });
  const smoothY = useSpring(containerY, { stiffness: 25, damping: 20 });

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(query(collection(db, "projects")));
      const initialData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(initialData.filter((p) => p.order !== undefined));
      setAllProjects(initialData);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (!viewAll) return;

    const timer = setTimeout(() => {
      setMouseEnabled(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [viewAll]);

  const handleMouseMove = (e) => {
    if (!viewAll || !mouseEnabled) return;

    const maxShiftX = 600;
    const maxShiftY = 700;

    const moveX = (e.clientX / window.innerWidth - 0.5) * maxShiftX * -1;
    const moveY = (e.clientY / window.innerHeight - 0.5) * maxShiftY * -1;

    containerX.set(moveX);
    containerY.set(moveY);
  };

  const handleMouseLeave = () => {
    animate(containerX, 0, { duration: 0.2 });
    animate(containerY, 0, { duration: 0.2 });
  };

  const handleViewMore = () => {
    setProjects(allProjects);
    setViewAll(true);

    animate(containerX, 0, { duration: 0.1 });
    animate(containerY, 0, { duration: 0.1 });
  };

  const handleViewLess = () => {
    setProjects(allProjects.filter((p) => p.order !== undefined).slice(0, 3));
    setViewAll(false);
    animate(containerX, 0, { duration: 0.1 });
    animate(containerY, 0, { duration: 0.1 });
  };

  const handleClick = (params, params2) => {
    setSelected(true);
    setViewAll(params2);
    setSelectedProject(params);
  };

  const handleBack = () => {
    setSelected(false);
    setSelectedProject(null);
    animate(containerX, 0, { duration: 0.1 });
    animate(containerY, 0, { duration: 0.1 });
  };

  useEffect(() => {
    const scrollContainer =
      document.querySelector(".window-frame") &&
      document.querySelector(".home");

    if (!scrollContainer) return;

    if (selected) {
      window.scrollTo({ top: 0, behavior: "smooth" });

      scrollContainer.style.overflow = "hidden";
    } else {
      scrollContainer.style.overflow = "scroll";
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.style.overflow = "scroll";
      }
    };
  }, [selected]);

  console.log(selected);

  return (
    <section
      className="project-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseLeave}
    >
      {selectedProject ? (
        <ProjectDetails
          handleBack={() => handleBack()}
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <ProjectGridWrapper
          containerX={smoothX}
          containerY={smoothY}
          viewAll={viewAll}
        >
          <ProjectsGrid
            projects={projects}
            viewAll={viewAll}
            onSelect={setSelectedProject}
            handleViewMore={handleViewMore}
            handleViewLess={handleViewLess}
            handleClick={handleClick}
          />
        </ProjectGridWrapper>
      )}

      {viewAll && selected === false ? (
        <ViewMoreBtn
          handleViewLess={handleViewLess}
          handleViewMore={handleViewMore}
          viewAll={viewAll}
        />
      ) : (
        ""
      )}
    </section>
  );
});

Project.displayName = "Project";

export default Project;
