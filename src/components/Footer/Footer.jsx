import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Suraj</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#qualification" className="footer__link">
                Qualification
              </a>
            </li>
            <li>
              <a href="#testimonials" className="footer__link">
                Testimonials
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/profile.php?id=100006190548335"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/itsmesurajmishra/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://x.com/suraj3161"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="www.linkedin.com/in/surajmishra2215/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; SurajMishra. All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
