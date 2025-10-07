import React, { useContext } from "react";
import "./WindowContent.scss";
import { motion } from "framer-motion";
import { AppState } from "../../components/AppStateProvider/AppStateProvider";

export default function WindowContent({ card, open, id }) {
  const { setHover } = useContext(AppState);

  return (
    <div className={`about__window-content ${open === id ? "open" : "close"}`}>
      {card.content.map((item, idx) => (
        <ul key={idx}>
          {typeof item === "string" ? (
            <li>{item}</li>
          ) : item.url ? (
            <li>
              <motion.a
                onMouseLeave={() => {
                  setHover(false);
                }}
                onMouseEnter={() => {
                  setHover(true);
                }}
                whileHover={{ scale: 1.1 }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-styling"
              >
                {item.label} <span>↗</span>
              </motion.a>
            </li>
          ) : null}
        </ul>
      ))}
    </div>
  );
}
