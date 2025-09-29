import React, { useState, useEffect, useContext } from "react";
import "./LeetCodeCard.scss";
import { motion } from "framer-motion";
import { AppState } from "../../../../components/AppStateProvider/AppStateProvider";

export default function LeetCodeCard({ leetCode }) {
  const text = "LeetCode";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const { setHover } = useContext(AppState);

  useEffect(() => {
    let interval;
    if (isHovering && index < text.length) {
      interval = setInterval(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isHovering, index, text]);

  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setDisplayed((prev) => {
          if (prev.length === 0) {
            setIndex(0);

            clearInterval(interval);
            return prev;
          }
          return prev.slice(0, -1);
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <motion.div
      onMouseLeave={() => {
        setHover(false) , setIsHovering(false);
      }}
      onMouseEnter={() => {
        setHover(true) , setIsHovering(true);
      }}
      onClick={() => leetCode(true)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.8,
        duration: 1,
        type: "spring",
        damping: 10,
        stiffness: 80,
      }}
      className="leetcode-card"
    >
      <span>&gt;</span>
      <p>
        {displayed}
        <span className="blink">_</span>
      </p>
    </motion.div>
  );
}
