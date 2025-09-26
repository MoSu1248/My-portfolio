import { useEffect, useState, useContext } from "react";
import { AppState } from "../AppStateProvider/AppStateProvider";

export default function Cursor() {
  const { currentSection } = useContext(AppState);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  // 🎨 match section spotlight colors
  const sectionColors = {
    hero: "#5178b3",
    about: "#a566f0",
    project: "#d95c66",
    skills: "#399149",
    contact: "#ffb347",
  };
  const cursorColor = sectionColors[currentSection] || "var(--white)";

  useEffect(() => {
    const moveCursor = (e) => {
      setPos({ x: e.pageX, y: e.pageY });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const interactiveEls = document.querySelectorAll(
      "button, a,.assignment-card "
    );

    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  useEffect(() => {
    const resetHover = () => setHover(false);
    window.addEventListener("mouseleave", resetHover);
    return () => window.removeEventListener("mouseleave", resetHover);
  }, []);

  useEffect(() => {
    const handleLeaveWindow = () => setHover(false);
    window.addEventListener("mouseleave", handleLeaveWindow);
    return () => window.removeEventListener("mouseleave", handleLeaveWindow);
  }, []);

  useEffect(() => {
    const resetHover = () => setHover(false);
    window.addEventListener("mousedown", resetHover);
    return () => window.removeEventListener("mousedown", resetHover);
  }, []);

  return (
    <div
      className="cursor"
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: `translate(-50%, -50%) scale(${hover ? 1.5 : 1})`,
        border: hover ? `2px solid ${cursorColor}` : `2px solid var(--white)`,
        backgroundColor: hover ? `${cursorColor}56` : `transparent`,
        boxShadow: hover ? `0 0 5px ${cursorColor}` : `0 0 20px ${cursorColor}`,
        transition:
          "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease-in",
        zIndex: 9999,
      }}
    />
  );
}
