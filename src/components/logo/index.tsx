import styled from "./logo.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type LogoProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const Logo = ({ isOpen, toggleMenu }: LogoProps) => {
  return (
    <>
      <div className={styled.container}>
        <h1 className={styled.logo}>NC</h1>
        <span onClick={toggleMenu}>
          {isOpen ? (
            <AiOutlineClose className={styled.menu} />
          ) : (
            <AiOutlineMenu className={styled.menu} />
          )}
        </span>
      </div>
    </>
  );
};
