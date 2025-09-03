import React, { forwardRef } from "react";
import "./HeroSection.scss";

const HeroSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="hero" className="hero">
      <p>Hero</p>
    </section>
  );
});
export default HeroSection;
