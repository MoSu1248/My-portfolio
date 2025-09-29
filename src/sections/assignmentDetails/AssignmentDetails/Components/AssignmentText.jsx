import { motion } from "framer-motion";
import React from "react";

export default function AssignmentText({ project }) {
  return (
    <>
      <motion.h2
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: "easeOut", duration: 0.3 }}
      >
        {project.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {project.description}
      </motion.p>
    </>
  );
}
