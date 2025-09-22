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
    setSelectedProject(params);
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
          projects={projects}
          onClick={handleClick}
          viewAll={viewAll}
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
