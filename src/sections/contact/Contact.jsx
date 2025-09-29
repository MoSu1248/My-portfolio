import React, { forwardRef } from "react";
import "./Contact.scss";
import { easeOut, motion } from "framer-motion";

// Variants for staggering the appearance of all text/inputs/links
const containerVariants = {
  hidden: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Variants for the button links to make them appear slightly differently
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
          {/* LEFT PANEL: Info & Links (Staggered) */}
          <div className="info-panel">
            <h1 className="contact-heading">
              Connect With Me <span className="title-highlight">.</span>
            </h1>

            <motion.div
              className="contact-text-container"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="text-container-line"
                initial={{ height: 0 }}
                whileInView={{ height: `60%` }}
                transition={{ delay: 0.2, ease: `easeOut`, duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              ></motion.div>
              <div className="contact-upper-container">
                <motion.h3 variants={itemVariants}>
                  [ LOCATION & AVAILABILITY ]
                </motion.h3>
                <motion.p variants={itemVariants}>
                  I'm currently based in
                  <strong> Johannesburg, South Africa</strong>.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Available for full-stack and front-end projects.
                </motion.p>
              </div>

              <div className="contact-lower-container">
                <motion.h3 variants={itemVariants}>[ CONTACTS ]</motion.h3>
                <motion.div
                  className="direct-links-group"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.a
                    href="mailto:youremail@example.com"
                    className="contact-link"
                    variants={linkVariants}
                  >
                    Email
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/yourprofile"
                    className="contact-link"
                    variants={linkVariants}
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/yourprofile"
                    className="contact-link"
                    variants={linkVariants}
                  >
                    GitHub
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="form-panel"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="form-action-frame"></motion.div>
            <motion.h2 variants={itemVariants} className="panel-title">
              Contact Me
            </motion.h2>

            <form className="contact-form">
              <span className="corner top-right"></span>
              <span className="corner bottom-left"></span>
              <motion.input
                type="text"
                placeholder="Your Name"
                className="form-input"
                variants={itemVariants}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="form-input"
                variants={itemVariants}
              />
              <motion.textarea
                placeholder="Tell me about your project..."
                className="form-input textarea"
                variants={itemVariants}
              />
              <motion.button
                type="submit"
                className="submit-button"
                variants={itemVariants}
              >
                Send Message
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 9 5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.12904 3.45331C8.21681 3.36552 8.26611 3.24646 8.26611 3.12232C8.26611 2.99818 8.21681 2.87912 8.12904 2.79133L5.48064 0.142925C5.43745 0.0982105 5.38579 0.0625447 5.32868 0.0380087C5.27156 0.0134728 5.21012 0.000557851 5.14796 1.76762e-05C5.0858 -0.000522499 5.02415 0.011323 4.96662 0.0348627C4.90908 0.0584023 4.85681 0.093165 4.81285 0.137122C4.7689 0.181079 4.73413 0.23335 4.71059 0.290886C4.68705 0.348422 4.67521 0.410069 4.67575 0.472232C4.67629 0.534394 4.6892 0.595827 4.71374 0.652944C4.73828 0.710062 4.77394 0.761722 4.81866 0.804909L6.6679 2.65416H0.46801C0.343846 2.65416 0.224766 2.70348 0.136968 2.79128C0.0491704 2.87907 -0.000153473 2.99815 -0.000153473 3.12232C-0.000153473 3.24648 0.0491704 3.36556 0.136968 3.45336C0.224766 3.54116 0.343846 3.59048 0.46801 3.59048H6.6679L4.81866 5.43973C4.73338 5.52803 4.68619 5.64629 4.68725 5.76904C4.68832 5.89179 4.73756 6.00921 4.82436 6.09601C4.91116 6.18281 5.02858 6.23205 5.15133 6.23311C5.27408 6.23418 5.39234 6.18699 5.48064 6.10171L8.12904 3.45331Z" />
                  </svg>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

export default Contact;
