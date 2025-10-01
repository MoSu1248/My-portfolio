import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import SkillIcons from "../../../data/SkillIcons";
import { motion } from "framer-motion";
import { AppState } from "../../../components/AppStateProvider/AppStateProvider";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function ProjectArchiveGrid() {
  const { setHover } = useContext(AppState);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(collection(db, "smallerProjects"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      setProjects(data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      if (!projects.length) return;

      const storage = getStorage();
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          if (!project.imageThumbnail) return { ...project, imageUrl: null };

          try {
            const url = await getDownloadURL(
              ref(storage, project.imageThumbnail)
            );
            return { ...project, imageUrl: url };
          } catch (err) {
            console.error(
              "Failed to fetch image for project:",
              project.title,
              err
            );
            return { ...project, imageUrl: null };
          }
        })
      );

      setProjects(updatedProjects);
    };

    fetchImages();
  }, [projects]);

  return (
    <div className="all-projects-grid">
      {projects.map((item, index) => (
        <div
          className="all-projects_card"
          key={index}
          onMouseLeave={() => setHover(false)}
          onMouseEnter={() => setHover(true)}
        >
          <img
            src={
              item.imageUrl ||
              "https://t3.ftcdn.net/jpg/03/15/00/88/360_F_315008869_ZDL4DE9jCbL8KdntMm8kc1KBzbTWxkCM.jpg"
            }
            alt={item.title}
          />
          <div className="all-projects_card-text-container">
            <div className="all-projects_card-header">
              <h2>{item.title}</h2>
              <ul>
                {item.techStack?.map((tech, idx) => {
                  const Icon = SkillIcons[tech];
                  return (
                    <motion.li key={idx} className="flex items-center gap-2">
                      {Icon ? <Icon className="test-styling" /> : null}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            <p className="project-type">{item.category}</p>
            <h3 className="project-description">
              this is a little text that im using for styling purposes
            </h3>
            <div className="all-projects-links">
              <ul>
                <li className="live-link">
                  <a href="">
                    Live Site<span className="link-icon">↗</span>
                  </a>
                </li>
                <li className="code-link">
                  <a href="">
                    Code<span className="link-icon">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
