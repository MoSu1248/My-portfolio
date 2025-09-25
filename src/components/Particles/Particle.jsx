import { motion } from "framer-motion";

const Particle = ({ x, y, size, baseOpacity, duration }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: `white`,
        top: `${y}vh`,
        left: `${x}vw`,
      }}
      animate={{
        x: [`0vw`, `${Math.random() * 50 - 25}vw`],
        y: [`0vh`, `${Math.random() * 50 - 25}vh`],
        opacity: [baseOpacity, baseOpacity + 0.1, baseOpacity],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
        delay: Math.random() * 5,
      }}
    />
  );
};

export default Particle;
