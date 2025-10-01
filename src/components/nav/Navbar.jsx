import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { navIcons } from "../../data/Navicons";
import { AppState } from "../AppStateProvider/AppStateProvider";
import { motion } from "framer-motion";

export default function Nav({ scrollTo }) {
  const { currentSection, setHover } = useContext(AppState);
  const icons = navIcons;

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) return;
    scrollTo(section.offsetTop);
  };

  return (
    <motion.nav
      className="nav"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: `0`, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
    >
      <ul className="nav-container">
        {icons.map((item, index) => (
          <li
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
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
    </motion.nav>
  );
}
