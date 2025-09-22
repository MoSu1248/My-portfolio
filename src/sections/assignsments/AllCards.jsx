import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./AllCards.scss";

export default function AllCards({ project, handleClick, viewAll, index }) {
  const [imageUrl, setImageUrl] = useState(
    "https://t3.ftcdn.net/jpg/02/49/64/56/360_F_249645657_ItyPSZ5b14Bqdc2rtoOzlEq5Z7SQpd7x.jpg"
  );

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
      className={`order-${project.order}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.2,
        duration: 1,
        type: "spring",
        damping: 15,
        stiffness: 40,
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
