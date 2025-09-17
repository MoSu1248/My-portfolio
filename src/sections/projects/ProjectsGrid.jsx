import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ViewMoreBtn from "./ViewMoreBtn";
import "./projects.scss";

export default function ProjectsGrid({
  projects,
  viewAll,
  onSelect,
  handleViewMore,
  handleViewLess,
  selected,
  handleClick,
}) {
  const galleryWrapperRef = useRef(null);
  const [animationsDone, setAnimationsDone] = useState(false);

  return (
    <motion.div className="gallery-wrapper" ref={galleryWrapperRef}>
      <div className="gallery">
        {/* Animate the first 3 cards */}
        <AnimatePresence>
          {!viewAll &&
            projects.slice(0, 3).map((project, index) => (
              <motion.div
                // layout={!selected} // stop grid layout animation while a card is selected
                key={project.id || index}
                className="row"
                // style={{ perspective: 1000 }}
                // initial={{ opacity: 0, y: 60 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, margin: "-100px" }}
                // transition={{
                //   duration: 0.5,
                //   delay: index * 0.2,
                //   ease: "easeOut",
                // }}
                // exit={{ opacity: 0, y: -40, scale: 0.98 }}
              >
                <ProjectCard
                  // layoutId={
                  //   selected?.id === project.id
                  //     ? `card-${project.id}`
                  //     : undefined
                  // }
                  index={index}
                  project={project}
                  onSelect={onSelect}
                  viewAll={viewAll}
                  selected={selected}
                  handleClick={handleClick}
                />
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Animate full gallery when viewAll */}
        {viewAll &&
          projects.slice(0, 9).map((project, index) => (
            <motion.div
              // layout={!selected} // same here
              // key={project.id || index}
              className={`row order-${project.order}`}
              // initial={{ opacity: 0, scale: 1.5 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true }}
              // transition={{
              //   duration: 1,
              //   delay: index * 0.2,
              //   ease: "easeOut",
              // }}
              // style={{
              //   pointerEvents: animationsDone ? "auto" : "none",
              //   perspective: 1000,
              // }}
              onAnimationComplete={() => setAnimationsDone(true)}
            >
              <ProjectCard
                layoutId={`card-${project.id}`} // always exists
                index={index}
                project={project}
                onSelect={onSelect}
                viewAll={viewAll}
                selected={selected}
                handleClick={handleClick}
              />
            </motion.div>
          ))}

        {/* ViewMore / ViewLess buttons */}
        {!viewAll && (
          <ViewMoreBtn viewAll={viewAll} handleViewMore={handleViewMore} />
        )}
        {viewAll && selected && (
          <ViewMoreBtn viewAll={viewAll} handleViewLess={handleViewLess} />
        )}
      </div>
    </motion.div>
  );
}
