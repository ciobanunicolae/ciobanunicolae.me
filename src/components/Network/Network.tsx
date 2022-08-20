import styled from "./Network.module.css";
import { motion } from "framer-motion";

export const Network = () => (
  <>
    <div className={styled.network}>
      <span className={styled.category}>NETWORK</span>
      <a href="mailto:ciobanu.nicolae.j@gmail.com">
        Mail
      </a>
      <a href="https://www.linkedin.com/in/ciobanunicolae/">LinkedIn</a>
      <a href="https://github.com/ciobanunicolae">GitHub</a>
    </div>
  </>
);
