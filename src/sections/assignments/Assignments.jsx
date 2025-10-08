import React, { useState, useEffect, forwardRef, useContext } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import ViewMoreBtn from "../projects/ViewMoreBtn";
import { db } from "../../firebase/firebase";
import DetailsContainer from "../assignmentDetails/DetailsContainer";
import AssignmentsContainer from "./AssignmentsContainer/AssignmentsContainer";
import "./assignments.scss";
import { AppState } from "../../components/AppStateProvider/AppStateProvider";
import { AnimatePresence, motion } from "framer-motion";

const Assignments = forwardRef((props, ref) => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewLessClicked, setViewLessClicked] = useState(false);

  const { setCurrentSubsection , isMobile } = useContext(AppState);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(query(collection(db, "projects")));
      const initialData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(initialData.filter((p) => p.order !== undefined));
      setAllProjects(initialData);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  const handleViewMore = () => {
    setProjects(allProjects);
    setViewAll(true);
    setCurrentSubsection("all");
    document.querySelector(".nav-container").classList.add("disabled");
  };

  const handleViewLess = () => {
    document.querySelector(".nav-container").classList.remove("disabled");

    setProjects(allProjects.filter((p) => p.order !== undefined).slice(0, 3));
    setViewAll(false);
    setViewLessClicked(true);
    setCurrentSubsection(null);
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
    <section
      className={
        !viewAll
          ? `assignments-section`
          : `assignments-section assignments-section-ViewAll`
      }
      ref={ref}
      id="projects"
    >
      <motion.div key="details">
        <DetailsContainer
          viewAll={viewAll}
          project={selectedProject}
          selected={selected}
          handleBack={handleBack}
          leetCode={closeLeetCode}
          leetCodeState={leetCodeState}
          lesserProjectsClose={closeLesser}
          lesserProjects={lesserProjects}
        />
      </motion.div>

      <AssignmentsContainer
        projects={projects}
        onClick={handleClick}
        openLeetCode={openLeetCode}
        openLesser={openLesser}
        handleViewMore={handleViewMore}
        handleViewLess={handleViewLess}
        viewAll={viewAll}
        loading={loading}
      />

      {(viewAll && selected === false)  ? (
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
