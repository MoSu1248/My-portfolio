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

  return (
    <section ref={ref} id="about" className="about">
      {cards.length > 0 ? (
        cards.map((card) => (
          <motion.div
            className={`about__window ${card.id}`}
            key={card.id}
            drag
            dragConstraints={ref}
            dragElastic={1}
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
