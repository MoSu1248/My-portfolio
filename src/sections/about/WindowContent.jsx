import React from "react";
import "./WindowContent.scss";
import { motion } from "framer-motion";

export default function WindowContent({ card }) {
  return (
    <div className="about__window-content">
      {card.content.map((item, idx) =>
        typeof item === "string" ? (
          <ul key={idx}>
            <li>{item}</li>
          </ul>
        ) : item.url ? (
          <ul key={idx}>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-styling"
              >
                {item.label} <span>↗</span>
              </a>
            </motion.li>
          </ul>
        ) : null
      )}
    </div>
  );
}
