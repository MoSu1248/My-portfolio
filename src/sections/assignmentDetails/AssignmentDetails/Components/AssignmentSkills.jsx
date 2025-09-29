import React from "react";
import SkillIcons from "../../../../data/SkillIcons";
import { motion } from "framer-motion";

export default function AssignmentSkills({ project }) {
  return (
    <div className="project__description-technology">
      <ul>
        {project.techStack?.map((item, index) => {
          const Icon = SkillIcons[item];
          return (
            <motion.li
              key={index}
              className="flex items-center gap-2"
              initial={{
                y: 30,
                opacity: 0,
                boxShadow: "none",
              }}
              animate={{
                y: 0,
                opacity: 1,
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.54)",
              }}
              transition={{ delay: 1.6, ease: "easeOut" }}
            >
              {Icon ? <Icon className="skill-icon-styling" /> : null}
              {item}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
