import React, { forwardRef } from "react";
import "./Contact.scss";
const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="contact">
      <p>contact</p>
    </section>
  );
});
export default Contact;
