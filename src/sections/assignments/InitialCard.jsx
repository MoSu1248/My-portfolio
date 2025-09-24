import { easeIn, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default function InitialCard({ project, onClick, viewAll }) {
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
      style={{ width: `100%`, height: `23%` }}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: project.order * 0.3,
        duration: 0.3,
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        layoutId={viewAll ? `all-${project.id}` : `card-${project.id}`}
        className={`assignment-card order-${project.order}`}
        onClick={() => onClick(project)}
      >
        <div className="card-number">
          <p>{project.order}</p>
        </div>
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
        <div className="image-styling">
          <motion.img
            layoutId={`img-${project.id}`}
            src={imageUrl}
            alt={project.title}
          />
        </div>
        <div className="date-container">
          <p>
            2024<span>↗</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
