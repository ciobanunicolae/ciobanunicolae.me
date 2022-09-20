import styled from "./network.module.css";

export const Network = () => (
  <>
    <div className={styled.network} id="network">
      <span className={styled.category}>NETWORK</span>
      <a target={"_blank"} href="mailto:ciobanu.nicolae.j@gmail.com">
        Mail
      </a>
      <a target={"_blank"} href="https://www.linkedin.com/in/ciobanunicolae/">
        LinkedIn
      </a>
      <a target={"_blank"} href="https://github.com/ciobanunicolae">
        GitHub
      </a>
    </div>
  </>
);
