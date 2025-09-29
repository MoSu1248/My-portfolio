import React, { useEffect, useState } from "react";
import InitialAssignments from "../InitialAssignments/InitialAssignments";
import AllAssignments from "../AllAssignments/AllAssignments";
import { AnimatePresence } from "framer-motion";

export default function AssignmentsContainer({
  projects,
  onClick,
  viewAll,
  openLeetCode,
  handleViewMore,
  openLesser,
  loading,
  handleViewLess,
}) {
  const [displayedViewAll, setDisplayedViewAll] = useState(viewAll);

  useEffect(() => {
    if (viewAll) {
      setDisplayedViewAll(true);
    } else {
      const timer = setTimeout(() => setDisplayedViewAll(false), 400);
      return () => clearTimeout(timer);
    }
  }, [viewAll]);

  return (
    <>
      <AnimatePresence mode="wait">
        {displayedViewAll ? (
          <AllAssignments
            key="all"
            loading={loading}
            openLesser={openLesser}
            projects={projects.slice(0, 9)}
            onClick={onClick}
            viewAll={viewAll}
            leetCode={openLeetCode}
            handleViewMore={handleViewMore}
            handleViewLess={handleViewLess}
          />
        ) : (
          <InitialAssignments
            key="initial"
            viewAll={viewAll}
            handleViewMore={handleViewMore}
            projects={projects.slice(0, 3)}
            onClick={onClick}
          />
        )}
      </AnimatePresence>
    </>
  );
}
