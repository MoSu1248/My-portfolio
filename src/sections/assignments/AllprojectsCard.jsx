import { motion } from "framer-motion";
import React from "react";
import "./AllProjectsCard.scss";

export default function AllprojectsCard({ openLesser }) {
  const bricks = Array.from({ length: 9 });

  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const brickVariants = {
    rest: { x: 0, y: 0 },
    hover: (i) => {
      const directions = [
        { x: -30, y: -30 },
        { x: 0, y: -30 },
        { x: 30, y: -30 },
        { x: -30, y: 0 },
        { x: 0, y: 0 },
        { x: 30, y: 0 },
        { x: -30, y: 30 },
        { x: 0, y: 30 },
        { x: 30, y: 30 },
      ];
      return {
        ...directions[i],
        transition: { type: "spring", stiffness: 120, damping: 8 },
      };
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.6,
        duration: 1,
        type: "spring",
        damping: 10,
        stiffness: 80,
      }}
      style={{ height: `100%` }}
      className="allProjectsgrid"
    >
      <motion.div
        className="all-projects-card"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={containerVariants}
        onClick={() => openLesser(true)}
      >
        {bricks.map((_, i) => (
          <motion.div
            key={i}
            className="brick"
            custom={i}
            variants={brickVariants}
          />
        ))}
        <div className="overlay">
          <h3>All Projects</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
