// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Carousel = ({ images }) => {
//   const [rotation, setRotation] = useState(0);
//   const radius = 300; // distance from center

//   const imageCount = images.length;
//   const angle = 360 / imageCount;

//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       setImages(images);
//     };
//     fetchImages();
//   }, []);

//   return (
//     <div
//       className="carousel-container"
//       style={{
//         perspective: "1000px",
//         width: "100%",
//         height: "100%",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <motion.div
//         className="carousel-wrapper"
//         style={{
//           width: "100%",
//           height: "100%",
//           position: "absolute",

//           transformStyle: "preserve-3d",
//           transform: `rotateY(${rotation}deg) translate(-50%, -50%)`,
//         }}
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         onDrag={(e, info) => setRotation((prev) => prev + info.delta.x * 0.5)}
//       >
//         {images.map((img, index) => {
//           const rotateY = angle * index;
//           return (
//             <motion.div
//               key={img.id}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: `rotateY(${rotateY}deg) translateZ(${radius}px)`,
//                 transformOrigin: "center center",
//               }}
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <img
//                 src={img.url}
//                 alt={img.name}
//                 style={{
//                   width: "200px",
//                   height: "200px",
//                   borderRadius: "12px",
//                 }}
//               />
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default Carousel;
