import { useContext } from "react";
import WindowBtns from "./WindowBtns";
import Logo from "../Logo/Logo";
import { AppState } from "../AppStateProvider/AppStateProvider";

import "./Header.scss";

export default function Header() {
  const { currentSection } = useContext(AppState);

  return (
    <section className="header">
      <Logo />
      <p>
        mohammed<span className={currentSection}>&lt;suhail&gt;</span>rahman
      </p>
      <WindowBtns />
    </section>
  );
}
