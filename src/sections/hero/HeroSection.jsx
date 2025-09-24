import React, { forwardRef } from "react";
import "./HeroSection.scss";

const HeroSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="hero" className="hero">
      <p className="test">ecod</p>
    </section>
  );
});
export default HeroSection;
