import React, { useState } from "react";
import "./qualification.css";
import { motion } from "framer-motion";
import { fadeInOut } from "../../motions";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title"> Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div
              
              className="qualification__data">
                <motion.div  
                variants={fadeInOut("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                >
                  <h3 className="qualification__title">
                    Master's of Computer Application
                  </h3>
                  <span className="qualification__subtitle">
                    Chandigarh University, Chandigarh
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2022- 2024
                  </div>
                </motion.div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__subtitle"></span>
                </div>

                <motion.div 
                variants={fadeInOut("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                >
                  <h3 className="qualification__title">
                    Bachelor's of Computer Application
                  </h3>
                  <span className="qualification__subtitle">
                    Sri Guru Govind Singh College, Chandigarh
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2017- 2020
                  </div>
                </motion.div>

                {/* <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div> */}
              </div>

              <div className="qualification__data">
                <motion.div
                variants={fadeInOut("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                >
                  <h3 className="qualification__title">Intermmediate School</h3>
                  <span className="qualification__subtitle">
                    Sri Sukhmani International School
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2015- 2017
                  </div>
                </motion.div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__subtitle"></span>
                </div>

                <motion.div 
                variants={fadeInOut("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                >
                  <h3 className="qualification__title">
                    Senior Secondary School
                  </h3>
                  <span className="qualification__subtitle">
                    Shri R S Dubey Adarsh Vidyalay Nalasopara, Mumbai
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2024- Present
                  </div>
                </motion.div>

                {/* <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div> */}
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <motion.div
                variants={fadeInOut("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                >
                  <h3 className="qualification__title">Website Developer</h3>
                  <span className="qualification__subtitle">
                    Shauryasoft Pvt. Ltd., Zirakpur
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>Sep 2023- Present
                  </div>
                </motion.div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__subtitle"></span>
                </div>

                <motion.div
                variants={fadeInOut("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                >
                  <h3 className="qualification__title">
                    Digital Marketing Executive
                  </h3>
                  <span className="qualification__subtitle">
                    Blue Square Infra, Zirakpur
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>Nov 2021- Aug 2023
                  </div>
                </motion.div>

                {/* <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div> */}
              </div>

              <div className="qualification__data">
                <motion.div
                variants={fadeInOut("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                >
                  <h3 className="qualification__title">SEO Executive</h3>
                  <span className="qualification__subtitle">
                    Acclimers Technologies, Zirakpur
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>Feb 2021- Sep 2021
                  </div>
                </motion.div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
