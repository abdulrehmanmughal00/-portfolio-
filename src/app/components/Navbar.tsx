"use client";
import Styles from "./Navbar.module.css";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <h1 className={Styles.logo}>
        Port<span className={Styles.span}>folio</span>
      </h1>
      <div className={Styles.home}>
        <div className={Styles.show1}>
          <a href="#home">
            <h3 className={Styles.h4}> Home </h3>
          </a>
          <a href="#about">
            <h3 className={Styles.h4}> About</h3>
          </a>
          <a href="#skills">
            <h3 className={Styles.h4}> Skills</h3>
          </a>
          <a href="#projects">
            <h3 className={Styles.h4}> Projects</h3>
          </a>
          <a href="#experience">
            <h3 className={Styles.h4}>Experience</h3>
          </a>
          <a href="#contact">
            <h3 className={Styles.h4}> Contact</h3>
          </a>
        </div>
      </div>
      <div className={Styles.cv}>
        <button className={Styles.cvBtn}>
          Download CV
          <FiDownload className={Styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
