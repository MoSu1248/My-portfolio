import React from "react";
import "./assignmentDetails.scss";
import { AnimatePresence, delay, easeIn, easeOut, motion } from "framer-motion";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import SkillIcons from "../../data/SkillIcons";
import Carousel from "./Carousel";

export default function AssignmentDetails({ project, handleBack, viewAll }) {
  const [imageUrl, setImageUrl] = useState(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
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
    <AnimatePresence key={project.title}>
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
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

      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
      <motion.div
        className="details__container"
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        layoutId={viewAll ? `all-card-${project.id}` : `card-${project.id}`}
      >
        <motion.div key="details" className="project__container">
          <div className="window-container">
            <button
              onClick={handleBack}
              className="back__btn"
              whilehover={{ scale: 1.05, type: "spring" }}
              whiletap={{ scale: 0.85 }}
            >
              <svg
                width="30"
                height="15"
                viewBox="0 0 9 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.12904 3.45331C8.21681 3.36552 8.26611 3.24646 8.26611 3.12232C8.26611 2.99818 8.21681 2.87912 8.12904 2.79133L5.48064 0.142925C5.43745 0.0982105 5.38579 0.0625447 5.32868 0.0380087C5.27156 0.0134728 5.21012 0.000557851 5.14796 1.76762e-05C5.0858 -0.000522499 5.02415 0.011323 4.96662 0.0348627C4.90908 0.0584023 4.85681 0.093165 4.81285 0.137122C4.7689 0.181079 4.73413 0.23335 4.71059 0.290886C4.68705 0.348422 4.67521 0.410069 4.67575 0.472232C4.67629 0.534394 4.6892 0.595827 4.71374 0.652944C4.73828 0.710062 4.77394 0.761722 4.81866 0.804909L6.6679 2.65416H0.46801C0.343846 2.65416 0.224766 2.70348 0.136968 2.79128C0.0491704 2.87907 -0.000153473 2.99815 -0.000153473 3.12232C-0.000153473 3.24648 0.0491704 3.36556 0.136968 3.45336C0.224766 3.54116 0.343846 3.59048 0.46801 3.59048H6.6679L4.81866 5.43973C4.73338 5.52803 4.68619 5.64629 4.68725 5.76904C4.68832 5.89179 4.73756 6.00921 4.82436 6.09601C4.91116 6.18281 5.02858 6.23205 5.15133 6.23311C5.27408 6.23418 5.39234 6.18699 5.48064 6.10171L8.12904 3.45331Z"
                  fill="white"
                />
              </svg>
            </button>
            <p>{project.title}</p>
          </div>
          <div className="text-container">
            <Carousel images={project.projectImages} />

            <div className="project__description">
              <motion.h2
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {project.description}
              </motion.p>
              <div className="highlights">
                {/* <h3>Technology</h3> */}
                <ul>
                  {project.highlights?.map((item, index) => {
                    return (
                      <motion.li
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        key={index}
                        className="flex items-center gap-2"
                      >
                        {item}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
              <div className="project__description-links">
                {/* <h3>Links</h3> */}
                <ul>
                  <motion.li
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <a className="link" href={project.liveUrl}>
                      <p className="link-text">Live Site</p>
                      <span className="link-icon">↗</span>
                      <span className="corner top-right"></span>
                      <span className="corner bottom-left"></span>
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <a href={project.repo} className="link">
                      <span className="corner top-right"></span>
                      <span className="corner bottom-left"></span>
                      <p className="link-text">Github Repo</p>
                      <span className="link-icon">↗</span>
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project__description-technology">
            {/* <h3>Technology</h3> */}
            <ul>
              {project.techStack?.map((item, index) => {
                const Icon = SkillIcons[item]; // grab the component
                return (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2"
                    initial={{
                      y: 30,
                      opacity: 0,
                      boxShadow: "none",
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      boxShadow: "0 8px 5px rgba(0, 0, 0, 0.459)",
                    }}
                    transition={{ delay: 1.2, ease: "easeOut" }}
                  >
                    {Icon ? <Icon className="skill-icon-styling" /> : null}
                    {item}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
