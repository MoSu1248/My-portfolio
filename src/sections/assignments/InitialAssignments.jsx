import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import ViewMoreBtn from "../projects/ViewMoreBtn";
import "./InitialAssignments.scss";
import InitialCard from "./InitialCard";

export default function InitialAssignments({
  projects,
  onClick,
  handleViewMore,
}) {
  return (
    <div className="initial-container">
      {projects.slice(0, 9).map((project, index) => (
        <InitialCard project={project} key={index} onClick={onClick} />
      ))}
      <ViewMoreBtn handleViewMore={handleViewMore} />
    </div>
  );
}
