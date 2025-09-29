import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { motion } from "framer-motion";
import React, { useEffect, useState, useContext } from "react";
import { AppState } from "../../../../components/AppStateProvider/AppStateProvider";

import "./AllCards.scss";

export default function AllCards({ project, handleClick, viewAll, index }) {
  const [imageUrl, setImageUrl] = useState(
    "https://t3.ftcdn.net/jpg/02/49/64/56/360_F_249645657_ItyPSZ5b14Bqdc2rtoOzlEq5Z7SQpd7x.jpg"
  );
  const { setHover } = useContext(AppState);

  useEffect(() => {
    if (project.imageThumbnail) {
      const storage = getStorage();
      const imageRef = ref(storage, project.imageThumbnail);
      getDownloadURL(imageRef)
        .then((url) => setImageUrl(url))
        .catch((err) => console.error("Failed to get image URL:", err));
    }
  }, [project.imageThumbnail]);

  return (
    <motion.div
      onMouseLeave={() => {
        setHover(false);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      className={`order-${project.order} order`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.2,
        duration: 1,
        type: "spring",
        damping: 10,
        stiffness: 80,
      }}
    >
      <motion.div
        layoutId={viewAll ? `all-card-${project.id}` : `card-${project.id}`}
        className={`project-card `}
        onClick={() => handleClick(project)}
      >
        <div className="all-card-image-container">
          <motion.img
            layoutId={`img-${project.id}`}
            src={imageUrl}
            alt={project.title}
            className="all-card-image"
          />
        </div>
        <div className="content-overlay">
          <div className="project-content">
            <motion.h2 layoutId={`heading-${project.id}`}>
              {project.title}
            </motion.h2>
            {/* <h6>{project.description}</h6> */}
            {project.highlights?.slice(0, 1).map((item, index) => (
              <h6 key={index}>{item}</h6>
            ))}
            <div className="technology">
              <ul>
                {project.techStack?.slice(0, 4).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="date-container">
            <p>
              2024
              <span>↗</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
