import React, { forwardRef } from "react";
import "./HeroSection.scss";
import test from "../../assets/hero/test2.svg";

const HeroSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="hero" className="hero">
      <p className="test">ecod</p>
      <img src={test} alt="" />
    </section>
  );
});
export default HeroSection;
