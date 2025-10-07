import { motion, AnimatePresence } from "framer-motion";

const AccordionContent = ({ open, children }) => {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="content" // Key is essential for AnimatePresence
          // Define the initial and final states
          initial="collapsed"
          animate="open"
          exit="collapsed"
          // Define the actual animation properties (variants)
          variants={{
            open: {
              opacity: 1,
              height: "auto", // Allows content to expand to its full height
              marginTop: "10px",
              transition: {
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98], // A smooth, bouncy ease
              },
            },
            collapsed: {
              opacity: 0,
              height: 0,
              marginTop: 0,
              transition: {
                duration: 0.2,
                ease: [0.4, 0.0, 0.6, 1],
              },
            },
          }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionContent;
