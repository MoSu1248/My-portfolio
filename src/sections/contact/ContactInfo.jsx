import React, { useContext } from "react";
import { motion } from "framer-motion";
import LinkedIn from "../../assets/social/LinkedIn.svg?react";
import Mail from "../../assets/social/mail_icon.svg?react";
import Github from "../../assets/social/github_icon.svg?react";

import { AppState } from "../../components/AppStateProvider/AppStateProvider";
import "./ContactInfo.scss";
export default function ContactInfo({
  containerVariants,
  itemVariants,
  linkVariants,
}) {
  const { setHover, showToast, isMobile , isTablet } = useContext(AppState);

  const links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mohammed-suhail-rahman-988825245/",
      icon: <LinkedIn />,
    },
    {
      title: "Email",
      url: "mailto:mohammedsuhailr2@gmail.com",
      icon: <Mail />,
    },
    {
      title: "Github",
      url: "https://github.com/MoSu1248",
      icon: <Github />,
    },
  ];

  function handleOpen(e) {
    e.preventDefault();
    showToast("Link opened in new tab");

    setTimeout(() => {
      window.open(e.currentTarget.href, "_blank", "noopener,noreferrer");
    }, 300);
  }

  return (
    <div className="info-panel">
      <h1 className="contact-heading">
        Connect With Me <span className="title-highlight">.</span>
      </h1>
      <motion.div
        className="contact-text-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-container-line"
          initial={{ height: 0 }}
          whileInView={{ height: `60%` }}
          transition={{ delay: 0.2, ease: `easeOut`, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        ></motion.div>
        <div className="contact-upper-container">
          <motion.h3 variants={itemVariants}>
            [ LOCATION & AVAILABILITY ]
          </motion.h3>
          <motion.p variants={itemVariants}>
            I'm currently based in
            <strong> Johannesburg, South Africa</strong>.
          </motion.p>
          <motion.p variants={itemVariants}>
            Available for full-stack and front-end projects.
          </motion.p>
        </div>

        <div className="contact-lower-container">
          <motion.h3 variants={itemVariants}>[ CONTACTS ]</motion.h3>
          <motion.div
            className="direct-links-group"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {links.map((item, index) => (
              <motion.a
                key={index}
                onMouseLeave={() => {
                  setHover(false);
                }}
                onMouseEnter={() => {
                  setHover(true);
                }}
                href={item.url}
                onClick={(e) => {
                  handleOpen(e);
                }}
                className="contact-link"
                variants={linkVariants}
              >
                {isTablet ? item.icon : item.title}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
