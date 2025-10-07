import React from "react";
import Portrait from "../../../assets/portrait/ProfilePic_bg_remove.png";
import { motion } from "framer-motion";
import WindowHeader from "../WindowHeader";

export default function MobilePortrait({
  zIndex,
  ref,
  open,
  toggleAccordion,
  isMobile,
}) {
  return (
    <motion.div
      id={6}
      onClick={() => toggleAccordion(6)}
      initial={{ opacity: 0, scale: 0.8 }}
      viewport={{ amount: 0.6, once: true }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut",
          delay: 5 * 0.15,
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      style={{
        zIndex,
      }}
      className="portrait-container"
    >
      <WindowHeader id={6} open={open} isMobile={isMobile} />
      <div className={`portrait-content ${open === 6 ? "open" : "close"}`}>
        <img src={Portrait} alt="Portrait Image" className="portrait-styling" />
      </div>
    </motion.div>
  );
}
