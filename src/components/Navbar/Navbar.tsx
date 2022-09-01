import styled from "./Navbar.module.css";
import {Logo} from "@/components";

import * as React from "react";

export const Navbar = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        const toggleMenu = () => {
            setIsOpen(!isOpen);
        }
        return(
    <>
        <Logo  isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu}/>
        <div className={`${styled.navbar} ${!isOpen && styled.active}`}>
            <a className={styled.link} href="#about">About</a>
            <a className={styled.link} href="#about">Projects</a>
            <a className={styled.link} href="#about">Network</a>
            <a className={styled.link} href="#about">Skills</a>
        </div>
        <svg className={styled.border} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="hsla(240, 8%, 9%, 1)" fill-opacity="1" d="M0,96L34.3,112C68.6,128,137,160,206,192C274.3,224,343,256,411,272C480,288,549,288,617,261.3C685.7,235,754,181,823,176C891.4,171,960,213,1029,234.7C1097.1,256,1166,256,1234,240C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
    </>
)}