import React, { useEffect, useState, forwardRef, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { motion } from "framer-motion";
import AboutMePortrait from "./AboutMePortrait";
import AboutDesktop from "./AboutDesktop";
import AboutMobile from "./AboutMobile";
import "./About.scss";

const About = forwardRef(() => {
  const [cards, setCards] = useState([]);
  const [zIndex, setZIndex] = useState(0);
  const ref = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileBreakpoint = 900;
  const isMobile = windowWidth <= mobileBreakpoint;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "aboutInfo"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCards(data);
      } catch (err) {
        console.error("Error fetching about info:", err);
      }
    };
    fetchCards();
  }, []);

  const handleClick = (e) => {
    const el = e.currentTarget;

    let maxZ = 0;
    document.querySelectorAll(".drag-elements").forEach((card) => {
      const z = parseInt(window.getComputedStyle(card).zIndex) || 0;
      if (z > maxZ) maxZ = z;
    });

    el.style.zIndex = maxZ + 1;
  };

  return (
    <motion.section ref={ref} id="about" className="about">
      <AboutMePortrait onClick={handleClick} ref={ref} zIndex={zIndex} />
      {cards.length > 0
        ? cards.map((card, index) =>
            isMobile ? (
              <AboutMobile
                card={card}
                index={index}
                ref={ref}
                onClick={handleClick}
              />
            ) : (
              <AboutDesktop
                card={card}
                index={index}
                ref={ref}
                onClick={handleClick}
              />
            )
          )
        : null}
    </motion.section>
  );
});

export default About;
