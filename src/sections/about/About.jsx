import React, { forwardRef } from "react";
import "./About.scss";
const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="about">
      <p>About</p>
    </section>
  );
});
export default About;
