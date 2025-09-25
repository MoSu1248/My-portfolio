import { useContext } from "react";
import WindowBtns from "./WindowBtns";
import Logo from "../Logo/Logo";
import { AppState } from "../AppStateProvider/AppStateProvider";
import "./Header.scss";
import { motion } from "framer-motion";
import ParticleLayer from "../Particles/ParticleLayer";

export default function Header() {
  const { currentSection } = useContext(AppState);

  return (
    <motion.section
      className="header"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: `0`, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
    >
      {" "}
      <Logo />
      <p>
        mohammed
        <span className={`header__${currentSection}`}>&lt;suhail&gt;</span>
        rahman
      </p>
      <WindowBtns />
    </motion.section>
  );
}
