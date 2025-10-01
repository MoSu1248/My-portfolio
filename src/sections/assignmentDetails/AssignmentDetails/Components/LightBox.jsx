import React from "react";
import { motion } from "framer-motion";
import Close from "../../../../assets/shared/close_icon.svg";
import "./LightBox.scss";

export default function LightBox({ viewImage, image }) {
  return (
    <motion.div
      className="view-image__container fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        layoutId={image}
        className="view-image max-w-[90%] max-h-[90%] rounded-lg"
        src={image}
        alt=""
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="close__btn absolute top-6 right-6"
        onClick={(e) => {
          e.stopPropagation();
          viewImage(false);
        }}
      >
        <img src={Close} alt="" className="close__icon w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}
