import React from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../../motions";

const Frontend = () => {
  return (
    <>
      <motion.div
      variants={fadeInOut("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      
      
      className="skills__content">
        <h3 className="skills__title">Digital Marketing</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">SEO</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">SMM</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Facebook Ads</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Google Ads</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Classified Ads</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">SMO</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Frontend;
