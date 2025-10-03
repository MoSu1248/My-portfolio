import { motion } from "framer-motion";
import React, { useContext } from "react";
import SkillIcons from "../../data/SkillIcons";
import { AppState } from "../../components/AppStateProvider/AppStateProvider";

export default function SkillCard({ indexNo, skillInfo }) {
  const Icon = SkillIcons[skillInfo.name];
  const { setHover } = useContext(AppState);

  return (
    <motion.div
      onMouseLeave={() => {
        setHover(false);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      className="card"
      key={indexNo}
      data="skill"
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: indexNo * 0.1 + 0.5,
        },
      }}
      whileHover={{ scale: 1.05, type: "spring" }}
      whileTap={{ scale: 0.85 }}
    >
      {Icon ? <Icon className="skill-icon" /> : null}

      <h5>{skillInfo.title}</h5>
    </motion.div>
  );
}
