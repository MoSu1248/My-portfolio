import React from "react";
import FooterSocial from "./FooterSocial";
import Button from "../ContactBtn/contactbtn";
import "./Footer.scss";
import ThemeToggle from "../ThemeToggle.jsx/ThemeToggle";
import SectionTracker from "../SectionTracker/SectionTracker";
import { motion } from "framer-motion";

export default function Footer({ scrollTo }) {
  return (
    <motion.div
      className="footer"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: `0`, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <ThemeToggle />
      <SectionTracker />
      <FooterSocial />
      <Button scrollTo={scrollTo} />
    </motion.div>
  );
}
