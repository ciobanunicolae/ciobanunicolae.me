import styled from "./skills.module.css";

export const Skills = () => {
  return (
    <div className={styled.skills} id='skills'>
      <span className={styled.category}>SKILLS</span>
      <p>React.js</p>
      <p>TypeScript</p>
      <p>PostgreSQL</p>
    </div>
  );
};
