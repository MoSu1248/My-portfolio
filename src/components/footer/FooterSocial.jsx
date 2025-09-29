import React, { useContext } from "react";
import "./FooterSocial.scss";
import LinkedInIcon from "../../assets/social/LinkedIn.svg?react";
import LeetCodeIcon from "../../assets/social/leetcode_icon.svg?react";
import GitHubIcon from "../../assets/social/github_icon.svg?react";
import EmailIcon from "../../assets/social/mail_icon.svg?react";
import { AppState } from "../AppStateProvider/AppStateProvider";
import { motion } from "framer-motion";

export default function FooterSocial() {
  const { setHover } = useContext(AppState);

  const socials = [
    {
      href: "https://github.com/MoSu1248?tab=repositories",
      label: "GitHub",
      icon: <GitHubIcon />,
    },
    {
      href: "https://leetcode.com/u/Mosu1248/",
      label: "LeetCode",
      icon: <LeetCodeIcon />,
    },
    {
      href: "https://www.linkedin.com/in/mohammed-suhail-rahman-988825245/",
      label: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: "mailto:your@email.com",
      label: "Email",
      icon: <EmailIcon />,
    },
  ];

  return (
    <div className="footer__social">
      <ul>
        {socials.map(({ href, label, icon }) => (
          <li
            key={label}
            onMouseLeave={() => {
              setHover(false);
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
