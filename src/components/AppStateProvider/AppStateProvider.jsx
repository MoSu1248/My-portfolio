import { createContext, useState, useEffect } from "react";
import ScrollBarUpdater from "../ScrollBarUpdater/ScrollBarUpdater";
import LightWrapper from "../LightWrapper/LightWrapper";

export const AppState = createContext();

export default function AppStateProvider({ children }) {
  const [currentSection, setCurrentSection] = useState("");
  const [theme, setTheme] = useState({ color: "white" });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [currentSubsection, setCurrentSubsection] = useState(null);

  const [hover, setHover] = useState(false);
  const [hoverType, setHoverType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tabletBreakpoint = 1200;
  const mobileBreakpoint = 900;

  const isMobile = windowWidth <= tabletBreakpoint;
  const isTablet = windowWidth <= mobileBreakpoint;

  const showToast = (msg, duration = 3000) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), duration);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            switch (entry.target.id) {
              case "about":
                setTheme({ color: "var(--purple)" });
                break;
              case "projects":
                setTheme({ color: "var(--red)" });
                break;
              case "skills":
                setTheme({ color: "var(--green)" });
                break;
              case "contact":
                setTheme({ color: "var(--yellow)" });
                break;
              default:
                setTheme({ color: "var(--blue)" });
            }
          }
        });
      },
      {
        threshold: [0.1, 0.5],
        rootMargin: "0px 0px -40% 0px",
      }
    );

    sections.forEach((id) => {
      const sectionEl = document.getElementById(id);
      if (sectionEl) observer.observe(sectionEl);
    });

    return () => {
      sections.forEach((id) => {
        const sectionEl = document.getElementById(id);
        if (sectionEl) observer.unobserve(sectionEl);
      });
    };
  }, []);

  return (
    <AppState.Provider
      value={{
        currentSection,
        theme,
        lightboxOpen,
        setLightboxOpen,
        setCurrentSubsection,
        currentSubsection,
        setHover,
        hover,
        setHoverType,
        hoverType,
        showToast,
        isMobile,
        isTablet,
      }}
    >
      <LightWrapper />
      {children}
      <ScrollBarUpdater />
      {toastMessage && (
        <div className={`toast toast-${currentSection}`}>{toastMessage}</div>
      )}
    </AppState.Provider>
  );
}
