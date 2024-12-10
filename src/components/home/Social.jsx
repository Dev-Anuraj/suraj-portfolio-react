import React from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../../motions";

const Social = () => {
  return (
    <>
      <motion.div
        variants={fadeInOut("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="home__social"
      >
        <a
          href="https://www.instagram.com/itsmesurajmishra/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006190548335"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-facebook"></i>
        </a>
        <a
          href="www.linkedin.com/in/surajmishra2215/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <a
          href="https://github.com/Dev-Anuraj"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </motion.div>
    </>
  );
};

export default Social;
