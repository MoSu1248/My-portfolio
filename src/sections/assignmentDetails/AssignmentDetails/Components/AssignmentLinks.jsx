import React from "react";
import "./AssignmentLink.scss";
import { motion } from "framer-motion";

export default function Links({ project }) {
  const links = [
    { title: "Github Repo", url: project.repo },
    { title: "Live Site", url: project.liveUrl },
  ];

  return (
    <div className="project__description-links">
      <ul>
        {links.map((item, index) => (
          <motion.li
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <a className="link" href={item.url}>
              <span className="top-right"></span>
              <span className="bottom-left"></span>
              <p className="link-text">{item.title}</p>
              <span className="link-icon">↗</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
