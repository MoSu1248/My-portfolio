import React, { useEffect, useState, forwardRef, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AboutContainerBtns from "./AboutContainerBtns";
import WindowContent from "./WindowContent";
import WindowHeader from "./WindowHeader";
import { motion } from "framer-motion";

import "./About.scss";

const About = forwardRef(() => {
  const [cards, setCards] = useState([]);
  const [zIndex, setZIndex] = useState(0);
  const ref = useRef();

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
    <section ref={ref} id="about" className="about">
      {cards.length > 0 ? (
        cards.map((card) => (
          <motion.div
            style={{
              zIndex,
            }}
            onMouseDown={(e) => handleClick(e)}
            className={`about__window ${card.id} drag-elements`}
            key={card.id}
            drag
            dragConstraints={ref}
            dragElastic={0.5}
          >
            <WindowHeader card={card.title} drag="x" />
            <WindowContent card={card} />
          </motion.div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
});

export default About;
