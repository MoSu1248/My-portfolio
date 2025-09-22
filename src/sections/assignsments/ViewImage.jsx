import React from "react";
import "./ViewImage.scss";
import Expand from "../../assets/shared/expand.svg";
import { AnimatePresence, motion } from "framer-motion";
import Close from "../../assets/shared/close_icon.svg";

export default function ViewImage({ viewImage, image }) {
  return (
    <AnimatePresence>
      <motion.div className="view-image__container">
        <motion.img
          // layoutId={image}
          className="view-image"
          src={image}
          alt=""
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="close__btn"
          onClick={() => {
            viewImage(false);
          }}
        >
          <img src={Close} alt="" className="close__icon" />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
