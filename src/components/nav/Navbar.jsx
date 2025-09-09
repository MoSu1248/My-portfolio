import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { navIcons } from "../../data/Navicons";
import { AppState } from "../AppStateProvider/AppStateProvider";

export default function Nav() {
  const { currentSection } = useContext(AppState);
  const icons = navIcons;

  return (
    <div className="nav">
      <ul>
        {icons.map((item, index) => (
          <li
            key={index}
            className={currentSection === item.name ? "active" : ""}
          >
            <a href={`#${item.name}`}>
              <svg
                className="icon-styling"
                width={item.dimensions.width}
                height={item.dimensions.height}
                viewBox={item.dimensions.viewBox}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className={`${item.name}__icon`} d={item.path} />
                <path d={item.path_2} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
