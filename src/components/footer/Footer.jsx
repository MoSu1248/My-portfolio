import React from "react";
import FooterSocial from "./FooterSocial";
import Button from "../ContactBtn/contactbtn";
import "./Footer.scss";
import ThemeToggle from "../ThemeToggle.jsx/ThemeToggle";

export default function Footer() {
  return (
    <div className="footer">
      <ThemeToggle />
      <FooterSocial />
      <Button />
    </div>
  );
}
