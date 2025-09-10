import React, { useRef } from "react";

export default function Gallery() {
  const galleryRef = useRef();

  return (
    <div className="container">
      <div className="gallery"></div>
    </div>
  );
}
