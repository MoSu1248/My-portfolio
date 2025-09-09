import React, { forwardRef, useEffect, useState } from "react";
import "./skills.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const Skills = forwardRef((props, ref) => {
  const [groupedSkills, setGroupedSkills] = useState({
    frontend: [],
    backend: [],
    design: [],
  });

  const [allSkills, setAllSkills] = useState();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "skills"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const grouped = data.reduce((acc, skill) => {
          const category = skill.category;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(skill);
          return acc;
        }, {});

        setAllSkills(data);
        setGroupedSkills(grouped);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };

    fetchSkills();
  }, []);
  const categoryOrder = ["frontend", "backend", "other"];

  return (
    <section ref={ref} id="skills" className="skills-section">
      <div className="cards-container">
        {categoryOrder.map((category) => (
          <div key={category} className="catagory-container">
            <h3>{category}</h3>
            <div className="card-container">
              {groupedSkills[category]?.map((skill, index) => (
                <SkillCard indexNo={index} skillInfo={skill} key={index}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
export default Skills;
