import React, {
  useEffect,
  useState,
  Suspense,
  Context,
  useContext,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppState } from "../../../components/AppStateProvider/AppStateProvider";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import SkillIcons from "../../../data/SkillIcons";

import "./AllProjectsDetails.scss";

export default function AllProjectsDetails({
  lesserProjects,
  lesserProjectsClose,
}) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const q = query(collection(db, "smallerProjects"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      setProjects(data);
    };
    fetchProblems();
  }, []);

  return (
    <>
      {lesserProjects && (
        <motion.div
          className="all-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="all-projects__container"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          >
            <div className="window-container">
              <button
                onClick={lesserProjectsClose}
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
              <p>[ Project Archive ]</p>
            </div>

            <div className="projects-header">
              <h1>Project Archive</h1>
              <p>
                Explore some of the websites and web applications I’ve created
                through studying, coursework, and personal projects. For a
                complete overview, visit my GitHub repository below.
              </p>
            </div>
            <div className="all-projects-grid">
              {projects.map((item, index) => {
                return (
                  <div className="all-projects_card" key={index}>
                    <img
                      src="https://t3.ftcdn.net/jpg/03/15/00/88/360_F_315008869_ZDL4DE9jCbL8KdntMm8kc1KBzbTWxkCM.jpg"
                      alt=""
                    />
                    <div className="all-projects_card-text-container">
                      <div className="all-projects_card-header">
                        <h2>{item.title}</h2>
                        <ul>
                          {item.techStack?.map((item, index) => {
                            const Icon = SkillIcons[item];
                            return (
                              <motion.li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                {Icon ? (
                                  <Icon className="test-styling" />
                                ) : null}
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
                            Live Site<span className="link-icon">↗</span>
                          </li>
                          <li className="code-link">
                            Code<span className="link-icon">↗</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
