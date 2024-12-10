import React from "react";
import { motion } from "framer-motion";
import { slideInOut } from "../../motions";

const Frontend = () => {
  return (
    <>
      <motion.div
      variants={slideInOut("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      
      
      className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">jQuery</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Frontend;
