import React from "react";
import InitialAssignments from "./InitialAssignments";
import AllAssignments from "./AllAssignments";
export default function AssignmentsContainer({
  projects,
  onClick,
  viewAll,
  openLeetCode,
  handleViewMore,
  openLesser,
}) {
  return (
    <>
      {viewAll ? (
        <AllAssignments
          openLesser={openLesser}
          projects={projects}
          onClick={onClick}
          viewAll={viewAll}
          leetCode={openLeetCode}
        />
      ) : (
        <InitialAssignments
          viewAll={viewAll}
          handleViewMore={handleViewMore}
          projects={projects.slice(0, 3)}
          onClick={onClick}
        />
      )}
    </>
  );
}
