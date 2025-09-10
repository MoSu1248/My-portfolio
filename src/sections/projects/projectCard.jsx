import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
 return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut", delay: 0.1 },
      }}
      viewport={{ amount: 0.8, once: true }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <div className="card-number">
        <p>{project.order}</p>
      </div>
      <div className="project-content">
        <h2>{project.title}</h2>
        <div className="technology">
          <ul>
            {project.techStack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="image">IMG</div>
      <div className="date-containter">
        <p>
          2024<span>↗</span>
        </p>
      </div>
    </motion.div>
  );
}
