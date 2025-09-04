import React from "react";
import "./WindowContent.scss";

export default function WindowContent({ card }) {
  return (
    <div className="about__window-content">
      {card.content.map((item, idx) =>
        typeof item === "string" ? (
          <p key={idx}>{item}</p>
        ) : item.url ? (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label} ↗
          </a>
        ) : null
      )}
    </div>
  );
}
