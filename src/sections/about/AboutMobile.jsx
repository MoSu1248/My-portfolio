import { motion } from "framer-motion";
import React from "react";
import WindowContent from "./WindowContent";
import WindowHeader from "./WindowHeader";
export default function AboutMobile({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      viewport={{ amount: 0.3, once: true }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut",
          delay: index * 0.15,
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      key={card.id}
      className={`about__window ${card.id} `}
    >
      <WindowHeader card={card.title} />
      <WindowContent card={card} />
    </motion.div>
  );
}
