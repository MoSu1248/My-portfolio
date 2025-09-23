import React from "react";
import AssignmentDetails from "../assignmentDetails/AssignmentDetails";
import LeetCodeDetails from "../assignmentDetails/LeetCodeDetails";
import AllProjectDetails from "../assignmentDetails/AllProjectsDetails";
import { AnimatePresence } from "framer-motion";
export default function DetailsContainer({
  leetCodeState,
  viewAll,
  selected,
  leetCode,
  handleBack,
  project,
  lesserProjects,
  lesserProjectsClose,
}) {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {leetCodeState && (
          <LeetCodeDetails
            viewAll={viewAll}
            selected={selected}
            leetCode={leetCode}
            leetCodeState={leetCodeState}
          />
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {lesserProjects && (
          <AllProjectDetails
            viewAll={viewAll}
            selected={selected}
            lesserProjects={lesserProjects}
            lesserProjectsClose={lesserProjectsClose}
          />
        )}
      </AnimatePresence>
      {project && (
        <AssignmentDetails
          viewAll={viewAll}
          project={project}
          selected={selected}
          handleBack={() => handleBack()}
        />
      )}
    </div>
  );
}
