import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import WindowContent from "./WindowContent";
import WindowHeader from "./WindowHeader";
import AccordionContent from "./AccordionContent";

export default function AboutMobile({
  card,
  index,
  openId,
  toggleAccordion,
  isMobile,
}) {
  // const contentRefs = useRef([]); // Ref array for GSAP transitions

  return (
    <motion.div
      onClick={() => toggleAccordion(index)}
      id={index}
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
      <WindowHeader
        card={card.title}
        open={openId}
        isMobile={isMobile}
        id={index}
      />

      <WindowContent card={card} open={openId} id={index} />
    </motion.div>
  );
}
