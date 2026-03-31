import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/milanpatel72/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — milanpatel72
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.S Computer Science, California State University San Marcos,
              California, USA — 2021-2024
            </p>
            <p>
              B.Tech Computer Engineering, SNPIT & RC, India — 2015-2019
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/milanpatel98"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/milanpatel72/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:milanpatel72@icloud.com"
              data-cursor="disable"
              className="contact-social"
            >
              Mail <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/_.milanpatel?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Milan Patel</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
