import React, { useState, useEffect, forwardRef } from "react";
import { useMotionValue, useSpring, animate } from "framer-motion";
import { collection, getDocs, query } from "firebase/firestore";
import ViewMoreBtn from "../projects/ViewMoreBtn";
import { db } from "../../firebase/firebase";
import InitialAssignments from "./InitialAssignments";
import AllAssignments from "./AllAssignments";

import "./assignments.scss";
import AssignmentDetails from "./AssignmentDetails";

const Assignments = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  //   const [animationsDone, setAnimationsDone] = useState(false);

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

  const handleViewMore = () => {
    setProjects(allProjects);
    setViewAll(true);
  };

  const handleViewLess = () => {
    setProjects(allProjects.filter((p) => p.order !== undefined).slice(0, 3));
    setViewAll(false);
  };

  const handleBack = () => {
    setSelected(false);
    setSelectedProject(null);
  };

  const handleClick = (params) => {
    setSelected(true);
    // setViewAll(params2);
    setSelectedProject(params);
  };

  const containerX = useMotionValue(0);
  const containerY = useMotionValue(0);
  const smoothX = useSpring(containerX, { stiffness: 25, damping: 20 });
  const smoothY = useSpring(containerY, { stiffness: 25, damping: 20 });

  const handleMouseMove = (e) => {
    const maxShiftX = 600;
    const maxShiftY = 700;

    const moveX = (e.clientX / window.innerWidth - 0.5) * maxShiftX * -1;
    const moveY = (e.clientY / window.innerHeight - 0.5) * maxShiftY * -1;

    console.log("movment");

    containerX.set(moveX);
    containerY.set(moveY);
  };

  return (
    <section className="assignments-section" ref={ref} id="project">
      {selectedProject && (
        <AssignmentDetails
          viewAll={viewAll}
          project={selectedProject}
          handleBack={() => handleBack()}
        />
      )}
      {viewAll ? (
        <AllAssignments
          containerX={smoothX}
          containerY={smoothY}
          projects={projects}
          onClick={handleClick}
          viewAll={viewAll}
          handleViewLess={handleViewLess}
        />
      ) : (
        <InitialAssignments
          viewAll={viewAll}
          handleViewMore={handleViewMore}
          projects={projects.slice(0, 3)}
          onClick={handleClick}
        />
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

export default Assignments;
