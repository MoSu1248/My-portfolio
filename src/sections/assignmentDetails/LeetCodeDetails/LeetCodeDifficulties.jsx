import { motion } from "framer-motion";
import React from "react";

export default function LeetCodeDifficulties({leetCodeState}) {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div className="summaries__container">
      <motion.h3
        key={leetCodeState}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.9 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          duration: 1.2,
          delay: 0.2,
        }}
      >
        Problems Solved : <span>78</span>
      </motion.h3>

      <motion.ul
        className="difficulty"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={itemVariants} className="easy">
          <span className="circle easy"></span>Easy : 69
        </motion.li>
        <motion.li variants={itemVariants} className="medium">
          <span className="circle medium"></span>Medium : 9
        </motion.li>
        <motion.li variants={itemVariants} className="hard">
          <span className="circle hard"></span>Hard : 0
        </motion.li>
      </motion.ul>
    </div>
  );
}
