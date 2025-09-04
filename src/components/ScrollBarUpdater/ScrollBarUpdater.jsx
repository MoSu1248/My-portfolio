import { useEffect, useContext } from "react";
import { AppState } from "../AppStateProvider/AppStateProvider";
import "./ScrollBarUpdater.scss";
function ScrollbarUpdater() {
  const { theme } = useContext(AppState);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-thumb",
      theme.color
    );
  }, [theme.color]);

  return null;
}

export default ScrollbarUpdater;
