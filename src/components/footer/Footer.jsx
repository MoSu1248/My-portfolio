import React from "react";
import FooterSocial from "./FooterSocial";
import Button from "../ContactBtn/contactbtn";
import "./Footer.scss";
import ThemeToggle from "../ThemeToggle.jsx/ThemeToggle";
import SectionTracker from "../SectionTracker/SectionTracker";
export default function Footer() {
  return (
    <div className="footer">
      <ThemeToggle />
      <SectionTracker />
      <FooterSocial />
      <Button />
    </div>
  );
}
