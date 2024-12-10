import React, { useState } from "react";
import "./services.css";
import { motion } from "framer-motion";
import { flip } from "../../motions";
import { slideInOut } from "../../motions";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title"> Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
          <motion.div 
          variants={slideInOut("left", 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
          
          className="services__content">
            <div>
              <i className="uil uil-arrow services__icon" style={{marginBottom:0}}></i>
              <h3 className="services__title">Web Development</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <span className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Website Development</h3>
                <p className="services__modal-description">
                  Services with more than 1.5 years of experince. Providing
                  quality work to clients and companies.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      I develop the user interface from design.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">I develop custom Webpage.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      I develop Wordpress website for your brand.
                    </p>
                  </li>
                </ul>
              </span>
            </div>
          </motion.div>

          <motion.div 
          variants={flip("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
          
          className="services__content">
            <div>
              <i class="bx bx-search-alt services__icon"></i>
              <h3 className="services__title">SEO Services</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <span className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">SEO Services</h3>
                <p className="services__modal-description">
                  Services with more than 2 years of experince. Providing
                  quality work to clients and companies.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      I bring your brand on top of the SERP.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">I bring quality and organic lead for your business.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      I position your company brand on top of the market.
                    </p>
                  </li>
                </ul>
              </span>
            </div>
          </motion.div>

          <motion.div 
          variants={slideInOut("right", 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
          
          className="services__content">
            <div>
              <i class="bx bx-line-chart services__icon"></i>
              <h3 className="services__title">Digital Marketing</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <span className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Digital Marketing</h3>
                <p className="services__modal-description">
                  Services with more than 2 years of experince. Providing
                  quality work to clients and companies.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      I do Social Media Management.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">I do optimization of your all social media plateforms.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>

                    <p className="services__modal-info">
                      I do Meta and Google ads for fastest growing of the business.
                    </p>
                  </li>
                </ul>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
