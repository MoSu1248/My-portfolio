import React, { forwardRef } from "react";
import "./HeroSection.scss";
import { motion } from "framer-motion";
import WordWrapper from "./WordWrapper";
import useSpotlightWords from "./useSpotlightWords";
import FloatingIcons from "./FloatingIcons";

const HeroSection = forwardRef((props, ref) => {
  const sentence = "Hi, i'm Suhail, a creative developer";
  useSpotlightWords(".light-0");

  return (
    <section ref={ref} id="hero" className="hero">
     <FloatingIcons />
      <motion.p
        className="test"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        ecod
      </motion.p>
      <div className="hero__container">
        <motion.h6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Home
        </motion.h6>
        <WordWrapper text={sentence} />
      </div>
      <motion.div
        className="fade-line"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      ></motion.div>
    </section>
  );
});
export default HeroSection;
