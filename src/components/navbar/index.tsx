import styled from "./navbar.module.css";
import { Logo } from "@/components";
import { BsSun, BsMoon } from "react-icons/bs";
import * as React from "react";
type NavbarProps = {
  theme: string;
  toggleTheme: () => void;
}
export const Navbar = ({theme, toggleTheme}: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <div>
        <Logo isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className={`${styled.navbar} ${!isOpen && styled.active}`}>
          <a className={styled.link} href="#about">
            About
          </a>
          <a className={styled.link} href="#skills">
            Skills
          </a>
          <a className={styled.link} href="#network">
            Network
          </a>
          {theme == "dark" ? (
            <BsSun onClick={toggleTheme} className={styled.icon} />
          ) : (
            <BsMoon onClick={toggleTheme} className={styled.icon} />
          )}
        </div>
        <svg
          className={styled.border}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 70"
        >
          <path
            vector-effect="non-scaling-stroke"
            fill={theme == "dark" ? "hsl(0, 0%, 90%)" : "hsl(240, 9%, 9%)"}
            fill-opacity="1"
            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
          ></path>
        </svg>
      </div>
    </>
  );
};
