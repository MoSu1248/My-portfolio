import React, { useEffect, useState } from "react";
import "./MobileCards.scss";
import { motion } from "framer-motion";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default function MobileCards({ project, handleClick, viewAll, index }) {
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
    <div
      className="all-card-image-container"
      onClick={() => handleClick(project)}
    >
      <img
        layoutId={`img-${project.id}`}
        src={imageUrl}
        alt={project.title}
        className="mobile-card-img"
      />
    </div>
  );
}
