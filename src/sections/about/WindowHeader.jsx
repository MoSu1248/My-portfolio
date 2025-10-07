import React, { useContext } from "react";
import AboutContainerBtns from "./AboutContainerBtns";
import MobileHeaderBtns from "./mobile/MobileHeaderBtns";
import "./WindowHeader.scss";
import { AppState } from "../../components/AppStateProvider/AppStateProvider";

export default function WindowHeader({ card, isMobile, open, id }) {
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
      {!isMobile ? (
        <AboutContainerBtns />
      ) : (
        <MobileHeaderBtns open={open} id={id} />
      )}
    </div>
  );
}
