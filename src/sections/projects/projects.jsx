import React, { forwardRef } from "react";
import "./projects.scss";
const Project = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="project" className="project">
      <p>project</p>
    </section>
  );
});
export default Project;
