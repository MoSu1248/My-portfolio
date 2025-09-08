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

  // const container = {
  //   hidden: {},
  //   show: {
  //     transition: {
  //       staggerChildren: 0.5,
  //       delayChildren: 1,
  //     },
  //   },
  // };

  // const child = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: { duration: 0.4, ease: "easeOut" },
  //   },
  // };

  return (
    <motion.section ref={ref} id="about" className="about">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            viewport={{ amount: 0.6, once: true }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1,
              },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            style={{
              zIndex,
            }}
            onMouseDown={(e) => handleClick(e)}
            className={`about__window ${card.id} drag-elements`}
            key={card.id}
            drag
            dragConstraints={ref}
            dragElastic={0}
          >
            <WindowHeader card={card.title} drag="x" />
            <WindowContent card={card} />
          </motion.div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </motion.section>
  );
});

export default About;
