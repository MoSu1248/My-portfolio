import React, { useContext } from "react";
import Portrait from "../../assets/portrait/ProfilePic_bg_remove.png";
import "./AboutMePortrait.scss";
import WindowHeader from "./WindowHeader";
import { motion } from "framer-motion";
import { AppState } from "../../components/AppStateProvider/AppStateProvider";

export default function AboutMePortrait({ zIndex, ref, open }) {
  const { setHoverType } = useContext(AppState);
  const handleClick = (e) => {
    const el = e.currentTarget;

    let maxZ = 0;
    document.querySelectorAll(".drag-elements").forEach((card) => {
      const z = parseInt(window.getComputedStyle(card).zIndex) || 0;
      if (z > maxZ) maxZ = z;
    });

    el.style.zIndex = maxZ + 1;
  };

  return (
    <motion.div
      onMouseEnter={() => {
        setHoverType("grab");
      }}
      onMouseLeave={() => {
        setHoverType("");
      }}
      id={6}
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
      onMouseDown={(e) => handleClick(e)}
      drag
      dragConstraints={ref}
      dragElastic={0}
      className="portrait-container"
    >
      <WindowHeader  />
      <div className={`portrait-content `}>
        <img src={Portrait} alt="Portrait Image" className="portrait-styling" />
      </div>
    </motion.div>
  );
}
