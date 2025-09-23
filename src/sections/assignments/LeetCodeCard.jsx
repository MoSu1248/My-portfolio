import React, { useState, useEffect } from "react";
import "./LeetCodeCard.scss";
import { motion } from "framer-motion";

export default function LeetCodeCard({ leetCode }) {
  const text = "LeetCode";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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
    if (!isHovering) {
      setDisplayed("");
      setIndex(0);
    }
  }, [isHovering]);

  return (
    <motion.div
      onClick={() => leetCode(true)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.6,
        duration: 1,
        type: "spring",
        damping: 15,
        stiffness: 40,
      }}
      className="leetcode-card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span>&gt;</span>
      <p>
        {displayed}
        <span className="blink">_</span>
      </p>
    </motion.div>
  );
}
