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
  loading,
}) {
  return (
    <>
      {viewAll ? (
        <AllAssignments
          loading={loading}
          openLesser={openLesser}
          projects={projects.slice(0, 9)}
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
