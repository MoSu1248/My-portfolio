import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import ViewImage from "./ViewImage";
import Expand from "../../assets/shared/zoom.svg";

export default function Carousel({ images }) {
  const [viewImage, setViewImage] = useState(false);
  const [displayImage, setDisplayImage] = useState();
  const [index, setIndex] = useState();

  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        style={{ width: "100%", padding: "5rem 0rem" }}
      >
        {images?.map((src, index) => (
          <div className="carousel-container">
            <motion.div>
              <SwiperSlide
                className="image-hover"
                key={index}
                style={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <motion.img
                  layoutId={src}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
                <button
                  className="view-morebtn"
                  onClick={() => {
                    setViewImage(true);
                    setDisplayImage(src);
                    setIndex(index);
                  }}
                >
                  <img src={Expand} alt="" srcset="" />
                </button>
              </SwiperSlide>
            </motion.div>
          </div>
        ))}
      </Swiper>
      <AnimatePresence>
        {viewImage && (
          <ViewImage viewImage={setViewImage} image={displayImage} />
        )}
      </AnimatePresence>
    </div>
  );
}
