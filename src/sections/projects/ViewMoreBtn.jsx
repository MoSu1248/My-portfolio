import React from "react";
import "./ViewMoreBtn.scss";
import { motion } from "framer-motion";

export default function ViewMoreBtn({
  viewAll,
  handleViewLess,
  handleViewMore,
}) {
  return (
    <>
      {!viewAll && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut", delay: 0.8 },
          }}
          viewport={{ amount: 0.8, once: true }}
          className="btn-styling"
          onClick={() => handleViewMore()}
        >
          View More
        </motion.button>
      )}

      {viewAll && (
        <button className="btn-styling btn-less" onClick={() => handleViewLess()}>
          View Less
        </button>
      )}
    </>
  );
}
