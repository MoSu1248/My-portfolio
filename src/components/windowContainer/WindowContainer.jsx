import React from "react";
import "./WindowContainer.scss";
import { motion } from "framer-motion";
import Back from "../../assets/shared/back_arrow.svg?react";

export default function WindowContainer({ onClick, title, leetCodeState }) {
  return (
    <div>
      {leetCodeState ? (
        <div className="window-container">
          <motion.button
            onClick={onClick}
            className="back__btn"
            whileHover={{ scale: 1.05, type: "spring" }}
            whiletap={{ scale: 0.85 }}
          >
            <Back />
          </motion.button>
          <p>
            {title} <span className="blink">_</span>
          </p>
        </div>
      ) : (
        <div className="window-container">
          <motion.button
            onClick={onClick}
            className="back__btn"
            whileHover={{ scale: 1.05, type: "spring" }}
            whiletap={{ scale: 0.85 }}
          >
            <Back />
          </motion.button>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
}
