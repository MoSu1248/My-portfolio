import { motion } from "framer-motion";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect, useRef } from "react";

export default function ProjectCard({
  project,
  viewAll,
  index,

  handleClick,
}) {
  const [imageUrl, setImageUrl] = useState(
    "https://t3.ftcdn.net/jpg/02/49/64/56/360_F_249645657_ItyPSZ5b14Bqdc2rtoOzlEq5Z7SQpd7x.jpg"
  );

  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hoverEnabled, setHoverEnabled] = useState(false);

  useEffect(() => {
    if (project.image) {
      const storage = getStorage();
      const imageRef = ref(storage, project.image);
      getDownloadURL(imageRef)
        .then((url) => setImageUrl(url))
        .catch((err) => console.error("Failed to get image URL:", err));
    }
  }, [project.image]);

  useEffect(() => {
    const timer = setTimeout(() => setHoverEnabled(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!hoverEnabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!hoverEnabled) return;
    setRotate({ x: 0, y: 0 });
  };

  if (viewAll) {
    return (
      <motion.div
        layout={viewAll}
        layoutId={`card-${project.id}`}
        ref={cardRef}
        className={`project-card order-${project.order}`}
        style={{ perspective: 1000 }}
        onClick={() => handleClick(project, viewAll)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={
          hoverEnabled
            ? {
                boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
                transition: { duration: 0.25, ease: "easeOut" },
              }
            : {}
        }
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          transition: { type: "spring", stiffness: 200, damping: 15 },
        }}
      >
        <div className="image-grid">
          <img src={imageUrl} alt={project.title} />
        </div>
        <div className="content-overlay">
          <div className="project-content">
            <h2>{project.title}</h2>
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
              2024<span>↗</span>
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      layoutId={`card-${project.id}`}
      ref={cardRef}
      className={`project-card order-${project.order}`}
      transition={{
        layout: { duration: 0.02, type: "tween" }, // smooth morph
      }}
      onClick={() => handleClick(project, viewAll)}
      style={{ perspective: 1000, rotateX: rotate.x, rotateY: rotate.y }}
    >
      <div className="card-number">
        <p>{project.order}</p>
      </div>
      <div className="project-content">
        <h2>{project.title}</h2>
        <div className="technology">
          <ul>
            {project.techStack?.slice(0, 4).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="image">
        <img src={imageUrl} alt={project.title} className="img-styling" />
      </div>
      <div className="date-container">
        <p>
          2024<span>↗</span>
        </p>
      </div>
    </motion.div>
  );
}
