import React from 'react';
import { motion } from "framer-motion";
import { slideInOut } from "../../motions";

const Backend = () => {
  return (
    <>
    <motion.div 
    variants={slideInOut("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    
    className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Node Js.</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Express Js.</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">MongoDb</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">PostgreSql</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Github</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Backend