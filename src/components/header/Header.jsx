import React from "react";
import WindowBtns from "./WindowBtns";
import Logo from "../Logo/Logo";
import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <Logo />
      <p>
        Mohammed<span>Suhail</span>
      </p>
      <WindowBtns />
    </section>
  );
}
