import { motion } from "framer-motion";
import React from "react";
import WindowContent from "./WindowContent";
import WindowHeader from "./WindowHeader";
export default function AboutDesktop({
  card,
  index,
  handleClick,
  zIndex,
  ref,
}) {
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
      style={{
        zIndex,
      }}
      onMouseDown={(e) => handleClick(e)}
      key={card.id}
      drag
      dragConstraints={ref}
      dragElastic={0}
      className={`about__window ${card.id} drag-elements`}
    >
      <WindowHeader card={card.title} drag="x" />
      <WindowContent card={card} />
    </motion.div>
  );
}
