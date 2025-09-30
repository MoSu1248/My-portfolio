import React, { useContext } from "react";
import AboutContainerBtns from "./AboutContainerBtns";
import "./WindowHeader.scss";
import { AppState } from "../../components/AppStateProvider/AppStateProvider";

export default function WindowHeader({ card }) {
  const { setHoverType } = useContext(AppState);

  return (
    <div
      className="about__window-header"
      onMouseEnter={() => {
        setHoverType("grab");
      }}
      onMouseLeave={() => {
        setHoverType("");
      }}
    >
      <h6>{card}</h6>
      <AboutContainerBtns />
    </div>
  );
}
