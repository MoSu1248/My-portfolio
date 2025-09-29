import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import LeetCodeGallery from "./LeetCodeGallery";
import "./LeetCodeDetails.scss";
import { AppState } from "../../../components/AppStateProvider/AppStateProvider";
import VIewAll from "./VIewAll";
import LeetCodeDifficulties from "./LeetCodeDifficulties";
import CloseBtn from "../../../components/CloseBtn/CloseBtn";

export default function LeetCodeDetails({ leetCode, leetCodeState }) {
  const text = "LeetCode";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  const { setLightboxOpen } = useContext(AppState);

  useEffect(() => {
    setLightboxOpen(true);
    return () => setLightboxOpen(false);
  }, []);

  useEffect(() => {
    let interval;
    if (leetCodeState && index < text.length) {
      interval = setInterval(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, 250);
    }
    return () => clearInterval(interval);
  }, [leetCodeState, index, text]);

  return (
    <>
      {leetCodeState && (
        <motion.div
          className="leetCode"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="leetCode__container"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          >
            <div className="window-container">
              <CloseBtn action={leetCode} />
              <p>
                {displayed}
                <span className="blink">_</span>
              </p>
            </div>
            <LeetCodeDifficulties leetCodeState={leetCodeState} />
            <LeetCodeGallery />
            <VIewAll />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
