import { motion } from "framer-motion";
import React from "react";
import "./projects.scss";

export default function ProjectGridWrapper({
  children,
  containerX,
  containerY,
  viewAll,
}) {
  return (
    <motion.div
      className={`gallery-container ${
        viewAll ? "container-viewall" : "normal"
      }`}
      
      style={{
        x: containerX,
        y: containerY,
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}
