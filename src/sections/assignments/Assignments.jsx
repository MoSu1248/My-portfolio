import React, { useState, useEffect, forwardRef } from "react";

import { collection, getDocs, query } from "firebase/firestore";
import ViewMoreBtn from "../projects/ViewMoreBtn";
import { db } from "../../firebase/firebase";
import DetailsContainer from "./DetailsContainer";
import AssignmentsContainer from "./AssignmentsContainer";
import "./assignments.scss";

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

  const [leetCodeState, setLeetCodeState] = useState(false);

  const openLeetCode = () => setLeetCodeState(true);
  const closeLeetCode = () => setLeetCodeState(false);

  const [lesserProjects, setLesserProjects] = useState(false);

  const openLesser = () => setLesserProjects(true);
  const closeLesser = () => setLesserProjects(false);

  return (
    <section className="assignments-section" ref={ref} id="project">
      <DetailsContainer
        viewAll={viewAll}
        project={selectedProject}
        selected={selected}
        handleBack={() => handleBack()}
        leetCode={closeLeetCode}
        leetCodeState={leetCodeState}
        lesserProjectsClose={closeLesser}
        lesserProjects={lesserProjects}
      />
      <AssignmentsContainer
        projects={projects}
        onClick={handleClick}
        openLeetCode={openLeetCode}
        openLesser={openLesser}
        handleViewMore={handleViewMore}
        handleViewLess={handleViewLess}
        viewAll={viewAll}
      />

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
