import { useEffect, useState, useContext } from "react";
import { AppState } from "../AppStateProvider/AppStateProvider";

export default function Cursor() {
  const { currentSection, hover, setHover, hoverType , isMobile } = useContext(AppState);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sectionColors = {
    hero: "#5178b3",
    about: "#a566f0",
    projects: "#d95c66",
    skills: "#399149",
    contact: "#ffb347",
  };
  const cursorColor = sectionColors[currentSection] || "var(--white)";


  useEffect(() => {
    if (isMobile) return;
    const moveCursor = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", moveCursor);
    return () => window.removeEventListener("pointermove", moveCursor);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseDown = () => {
      setClicked(true);
      setHover(false);
    };
    const handleMouseUp = () => setClicked(false);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const resetHover = () => setHover(false);
    window.addEventListener("mouseleave", resetHover);
    return () => window.removeEventListener("mouseleave", resetHover);
  }, [setHover, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    if (hoverType === "grab") {
      document.body.style.cursor = clicked ? "grabbing" : "grab";
    } else {
      document.body.style.cursor = "none";
    }
  }, [hoverType, clicked, isMobile]);

  if (isMobile) return null;
  
  const useSystemCursor = hoverType === "grab";

  if (useSystemCursor) return null;

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
        transform: `translate(-50%, -50%) scale(${
          clicked ? 0.8 : hover ? 1.5 : 1
        })`,
        border: clicked
          ? `2px solid ${cursorColor}`
          : hover
          ? `2px solid ${cursorColor}36`
          : `2px solid var(--white)`,
        backgroundColor: clicked
          ? `${cursorColor}40`
          : hover
          ? `${cursorColor}20`
          : "transparent",
        boxShadow: clicked
          ? `0 0 15px ${cursorColor}, 0 0 30px ${cursorColor}80`
          : hover
          ? `0 0 5px ${cursorColor}`
          : `0 0 20px ${cursorColor}`,
        transition:
          "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        zIndex: 9999,
      }}
    />
  );
}
