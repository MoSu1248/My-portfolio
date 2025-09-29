import { motion } from "framer-motion";
import Particle from "./Particle";
import { particles } from "./particleData";

const ParticleLayer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: `1`,
      }}
    >
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}
    </motion.div>
  );
};

export default ParticleLayer;
