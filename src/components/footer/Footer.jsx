import React, { useContext } from "react";
import FooterSocial from "./FooterSocial";
import Button from "../ContactBtn/contactbtn";
import "./Footer.scss";
import ThemeToggle from "../ThemeToggle.jsx/ThemeToggle";
import SectionTracker from "../SectionTracker/SectionTracker";
import { AnimatePresence, motion } from "framer-motion";
import { AppState } from "../AppStateProvider/AppStateProvider";
export default function Footer({ scrollTo }) {
  const { currentSection, setHover } = useContext(AppState);

  return (
    <motion.div
      className="footer"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: `0`, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
    >
      <ThemeToggle theme={"dark"} />
      <SectionTracker />

      <AnimatePresence mode="wait">
        {currentSection !== "contact" && (
          <motion.div
            className="footer-right"
            key="footer-right-container"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{
              duration: 0.6,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            <FooterSocial />
            <Button scrollTo={scrollTo} key="persistent-cta-button" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
