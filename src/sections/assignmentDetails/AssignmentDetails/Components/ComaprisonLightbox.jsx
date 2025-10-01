import React from "react";
import { motion } from "framer-motion";
import Close from "../../../../assets/shared/close_icon.svg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

import "./LightBox.scss";

export default function ComparisonLightbox({
  viewImage,
  image,
  comparisonImages,
}) {
  // Grab the images array from the object using the image prop as the key
  const images = comparisonImages?.[image];
  console.log(comparisonImages);

  // Guard: need at least 2 images to show slider
  if (!images || images.length < 2) return null;

  const [first, second] = images;

  return (
    <motion.div
      className="view-image__container fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ maxWidth: "1400px", width: "90%", maxHeight: "100vh" }}>
        {" "}
        <span
          className="lightbox-headers"
          style={{
            position: "absolute",
            top: "5%",
            left: "30%",
            zIndex: 10,
            color: "white",
            background: "rgba(0,0,0,0.5)",
            padding: "5px",
          }}
        >
          Before
        </span>
        <span
          className="lightbox-headers"
          style={{
            position: "absolute",
            top: "5%",
            right: "30%",
            zIndex: 10,
            color: "white",
            background: "rgba(0,0,0,0.5)",
            padding: "5px",
          }}
        >
          After
        </span>
        <ReactCompareSlider
          boundsPadding={0}
          clip="both"
          handle={
            <ReactCompareSliderHandle
              style={{ color: "white", cursor: "none" }}
            />
          }
          itemOne={
            <ReactCompareSliderImage
              alt="one"
              src={second}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              alt="two"
              src={first}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          }
          keyboardIncrement="5%"
          position={50}
          style={{ borderRadius: "5px", height: "100%" }}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="close__btn absolute top-6 right-6"
        onClick={(e) => {
          e.stopPropagation();
          viewImage(false);
        }}
      >
        <img src={Close} alt="Close" className="close__icon w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}
