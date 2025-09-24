import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { navIcons } from "../../data/Navicons";
import { AppState } from "../AppStateProvider/AppStateProvider";
import { motion } from "framer-motion";

export default function Nav({ scrollTo }) {
  const { currentSection } = useContext(AppState);
  const icons = navIcons;

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;
    scrollTo(section.offsetTop);
  };

  return (
    <motion.div
      className="nav"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: `0`, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3,  }}
    >
      <ul>
        {icons.map((item, index) => (
          <li
            key={index}
            className={currentSection === item.name ? "active" : ""}
          >
            <a
              href={`#${item.name}`}
              onClick={(e) => handleClick(e, item.name)}
            >
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
    </motion.div>
  );
}
