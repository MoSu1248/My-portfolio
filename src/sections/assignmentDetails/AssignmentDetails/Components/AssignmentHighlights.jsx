import React from "react";
import { motion } from "framer-motion";
import "./AssignmentHighlights.scss";

export default function AssignmentHighlights({ project }) {
  return (
    <div className="highlights">
      <ul>
        {project.highlights?.map((item, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.12 }}
              key={index}
              className="flex items-center gap-2"
            >
              {item}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
