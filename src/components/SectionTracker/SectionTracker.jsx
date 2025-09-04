import React, { useContext } from "react";
import { AppState } from "../AppStateProvider/AppStateProvider";
import "./SectionTracker.scss";

export default function SectionTracker() {
  const { currentSection } = useContext(AppState);

  return (
    <div>
      {currentSection !== "hero" ? (
        <div className="section-tracker">
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 11.875H5.625V8.75C5.625 8.57292 5.685 8.42458 5.805 8.305C5.925 8.18542 6.07333 
8.12542 6.25 8.125H8.75C8.92708 8.125 9.07563 8.185 9.19563 8.305C9.31563 8.425 9.37542 8.57333 9.375 8.75V11.875H11.25V6.25L7.5 3.4375L3.75 
6.25V11.875ZM2.5 11.875V6.25C2.5 6.05208 2.54437 5.86458 2.63312 5.6875C2.72187 5.51042 2.84417 5.36458 3 5.25L6.75 2.4375C6.96875 2.27083 
7.21875 2.1875 7.5 2.1875C7.78125 2.1875 8.03125 2.27083 8.25 2.4375L12 5.25C12.1563 5.36458 12.2788 5.51042 12.3675 5.6875C12.4563 5.86458 
12.5004 6.05208 12.5 6.25V11.875C12.5 12.2188 12.3775 12.5131 12.1325 12.7581C11.8875 13.0031 11.5933 13.1254 11.25 13.125H8.75C8.57292 13.125 
8.42458 13.065 8.305 12.945C8.18542 12.825 8.12542 12.6767 8.125 12.5V9.375H6.875V12.5C6.875 12.6771 6.815 12.8256 6.695 12.9456C6.575 13.0656 
6.42667 13.1254 6.25 13.125H3.75C3.40625 13.125 3.11208 13.0027 2.8675 12.7581C2.62292 12.5135 2.50042 12.2192 2.5 11.875Z"
              fill="#7C7C7C"
            />
          </svg>

          <span className="arrow">{" > "}</span>
          <span key={currentSection} className="section-name animate-fade">
            {currentSection}
          </span>
        </div>
      ) : null}
    </div>
  );
}
