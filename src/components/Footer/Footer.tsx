import styled from "./Footer.module.css";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const Footer = () => (
  <>
    <div className={styled.footer}>
      <div className={styled.links}>
        <a href="mailto:ciobanu.nicolae.j@gmail.com">
          <FiMail />
        </a>
        <a href="https://www.linkedin.com/in/ciobanunicolae/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ciobanunicolae">
          <FaGithub />
        </a>
      </div>
      <div className={styled.copyright}>© Ciobanu Nicolae 2022</div>
    </div>
  </>
);
