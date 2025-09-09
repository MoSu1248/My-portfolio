import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "./projects.scss";

const Project = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="project" className="project-section">
      <div className="project-container">
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          viewport={{ amount: 0.8, once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
              delay: 0.1,
            },
          }}
          whileHover={{ scale: 1.05, type: "spring" }}
        >
          <div className="card-number">
            <p>01</p>
          </div>
          <div className="project-content">
            <h2>Audiophile</h2>
            <div className="technology">
              <ul>
                <li>React</li>
                <li>Css</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div className="image">IMG</div>
          <div className="date-containter">
            <p>
              2024 <span>↗</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          viewport={{ amount: 0.8, once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,

              ease: "easeOut",
              delay: 0.4,
            },
          }}
          whileHover={{ scale: 1.05, type: "spring" }}
        >
          <div className="card-number">
            <p>01</p>
          </div>
          <div className="project-content">
            <h2>Audiophile</h2>
            <div className="technology">
              <ul>
                <li>React</li>
                <li>Css</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div className="image">IMG</div>
          <div className="date-containter">
            <p>
              2024 <span>↗</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          viewport={{ amount: 0.8, once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
              delay: 0.6,
            },
          }}
          whileHover={{ scale: 1.05, type: "spring" }}
        >
          <div className="card-number">
            <p>01</p>
          </div>
          <div className="project-content">
            <h2>Audiophile</h2>
            <div className="technology">
              <ul>
                <li>React</li>
                <li>Css</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div className="image">IMG</div>
          <div className="date-containter">
            <p>
              2024 <span>↗</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
export default Project;
