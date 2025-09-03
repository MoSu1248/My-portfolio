import React, { forwardRef } from "react";
import "./skills.scss";
const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills" className="skills">
      <p>skills</p>
    </section>
  );
});
export default Skills;
