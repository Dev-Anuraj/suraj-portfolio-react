import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { motion } from "framer-motion";
import { fadeInOut } from "../../motions";

const home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <Data />
            <motion.div 
            variants={fadeInOut("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            
            className="home__img"></motion.div>
          </div>
            <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default home;
