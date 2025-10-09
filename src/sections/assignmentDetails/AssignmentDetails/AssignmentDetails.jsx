import React, { useContext } from "react";
import "./assignmentDetails.scss";
import { AnimatePresence, motion } from "framer-motion";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import Carousel from "./Components/Carousel";
import { AppState } from "../../../components/AppStateProvider/AppStateProvider";
import AssignmentLinks from "./Components/AssignmentLinks";
import AssignmentHighlights from "./Components/AssignmentHighlights";
import AssignmentText from "./Components/AssignmentText";
import AssignmentSkills from "./Components/AssignmentSkills";
import WindowContainer from "../../../components/windowContainer/WindowContainer";

export default function AssignmentDetails({ project, handleBack, viewAll }) {
  const [imageUrl, setImageUrl] = useState(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
  );

  const { setLightboxOpen, isTablet } = useContext(AppState);

  useEffect(() => {
    setLightboxOpen(true);
    return () => setLightboxOpen(false);
  });

  useEffect(() => {
    if (project.imageThumbnail) {
      const storage = getStorage();
      const imageRef = ref(storage, project.imageThumbnail);
      getDownloadURL(imageRef)
        .then((url) => setImageUrl(url))
        .catch((err) => console.error("Failed to get image URL:", err));
      const timeOut = setTimeout(() => {}, 3000);
    }
  }, [project.imageThumbnail]);

  return (
    <AnimatePresence key={project.title}>
      <motion.div
        style={{ pointerEvents: "auto" }}
        className="details__container"
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        layoutId={viewAll ? `all-card-${project.id}` : `card-${project.id}`}
      >
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{
              delay: 1,
              ease: "easeInOut",
            }}
            className={` light-0`}
            style={{
              position: "absolute",
              width: `800px`,
              height: `800px`,
              borderRadius: "50%",
              filter: "blur(80px)",
              backgroundColor: "#d74856",
              right: `-80px`,
              top: `-200px`,
            }}
          />
        </div>
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none  z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{
              delay: 1,
              ease: "easeInOut",
            }}
            className={` light-1`}
            style={{
              position: "absolute",
              width: `800px`,
              height: `800px`,
              borderRadius: "50%",
              filter: "blur(80px)",
              backgroundColor: "#d74856ff",
              left: `-80px`,
              bottom: `-80px`,
            }}
          />
        </div>
        <motion.div key="details" className="project__container">
          <WindowContainer title={project.title} onClick={handleBack} />
          <div className="text-container">
            <motion.div
              className="carousel_container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, ease: "easeOut" }}
            >
              <Carousel
                comparisonImages={project.comparisonImages}
                images={project.projectImages}
                compare={project.compare}
              />
            </motion.div>
            <div className="project__description">
              <AssignmentText project={project} />
              <AssignmentHighlights project={project} />
              <AssignmentLinks project={project} />
            </div>
            {isTablet && <AssignmentSkills project={project} />}
          </div>
            {!isTablet && <AssignmentSkills project={project} />}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
