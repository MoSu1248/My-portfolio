import React from "react";
import AboutContainerBtns from "./AboutContainerBtns";
import "./WindowHeader.scss";

export default function WindowHeader({ card }) {
  return (
    <div className="about__window-header">
      <h6>{card}</h6>
      <AboutContainerBtns />
    </div>
  );
}
