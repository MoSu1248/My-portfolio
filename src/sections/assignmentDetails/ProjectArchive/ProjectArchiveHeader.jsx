import React, { useContext } from "react";
import GitHubIcon from "../../../assets/social/github_icon.svg?react";
import { AppState } from "../../../components/AppStateProvider/AppStateProvider";
import "./ProjectArchiveHeader.scss";
import { motion } from "framer-motion";

export default function ProjectArchiveHeader() {
  const { setHover } = useContext(AppState);

  return (
    <div className="projects-header">
      <h1>Project Archive</h1>
      <div className="projects-header-container">
        <h2>
          Explore some of the websites and web applications I’ve created through
          studying, coursework, and personal projects. For a complete overview,
          visit my GitHub repository below.
        </h2>
      </div>
    </div>
  );
}
