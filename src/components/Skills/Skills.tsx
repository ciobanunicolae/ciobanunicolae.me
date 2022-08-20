import styled from "./Skills.module.css";

export const Skills = () => {
  return (
    <div className={styled.skills}>
      <span className={styled.category}>SKILLS</span>
      <p>React.js</p>
      <p>TypeScript</p>
      <p>PostgreSQL</p>
    </div>
  );
};
