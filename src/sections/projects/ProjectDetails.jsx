import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./ProjectDetails.scss";

export default function ProjectDetails({ project, handleBack }) {
  const [imageUrl, setImageUrl] = useState(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
  );

  useEffect(() => {
    if (project.image) {
      const storage = getStorage();
      const imageRef = ref(storage, project.image);
      getDownloadURL(imageRef)
        .then((url) => setImageUrl(url))
        .catch((err) => console.error("Failed to get image URL:", err));
    }
  }, [project.image]);

  return (
    <motion.div
      className="test-container"
      layoutId={`card-${project.id}`}
      transition={{
        layout: { duration: 1, ease: "easeOut", type: "tween" }, // smooth morph
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }} // fade out when closing
          transition={{ duration: 0.5 , delay: 0.5}}
        >
          <img src={imageUrl} alt={project.title} className="img-styling" />
          <h2>{project.title}</h2>
          <div className="technology">
            <ul>
              {project.techStack?.slice(0, 4).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button onClick={handleBack}>BACK</button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
