import React from "react";
import "./WordWrapper.scss";

const WordWrapper = ({ text }) => {
  return (
    <p className="word-container">
      {text.split(" ").map((word, i) => (
        <span key={i} className="word">
          {word}
        </span>
      ))}
    </p>
  );
};

export default WordWrapper;
