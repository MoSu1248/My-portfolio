import React, { forwardRef } from "react";
import "./Contact.scss";
import { easeOut, motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const containerVariants = {
  hidden: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const linkVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
};

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="contact">
      <motion.div
        className="contact-page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="contact-split-grid">
          <ContactInfo
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            linkVariants={linkVariants}
          />

          <ContactForm
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        </div>
      </motion.div>
    </section>
  );
});

export default Contact;
