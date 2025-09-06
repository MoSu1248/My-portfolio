import React from "react";
import "./WindowContent.scss";

export default function WindowContent({ card }) {
  return (
    <div className="about__window-content">
      {card.content.map((item, idx) =>
        typeof item === "string" ? (
          <ul>
            <li key={idx}>{item}</li>
          </ul>
        ) : item.url ? (
          <ul>
            <li>
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-styling"
              >
                {item.label} <span>↗</span>
              </a>
            </li>
          </ul>
        ) : null
      )}
    </div>
  );
}
