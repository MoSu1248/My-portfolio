import { motion } from "framer-motion";
import React from "react";

export default function ProjectDetails({ project, onBack }) {
  return (
    <motion.div
      key="details"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      test
    </motion.div>
  );
}
