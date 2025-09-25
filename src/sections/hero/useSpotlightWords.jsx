import { useEffect } from "react";

const useSpotlightWords = (spotlightSelector = ".light-0") => {
  useEffect(() => {
    const words = Array.from(
      document.querySelectorAll(".word-container .word")
    );
    const spotlight = document.querySelector(spotlightSelector);

    if (!spotlight) return;

    const update = () => {
      const spotlightRect = spotlight.getBoundingClientRect();
      const spotlightCenterX = spotlightRect.left + spotlightRect.width / 2;

      words.forEach((word) => {
        const wordRect = word.getBoundingClientRect();
        const threshold = wordRect.left + wordRect.width * 0.4; 

        if (spotlightCenterX >= threshold) {
          word.classList.add("visible");
        }
      });

      requestAnimationFrame(update); 
    };

    update();
  }, [spotlightSelector]);
};

export default useSpotlightWords;
