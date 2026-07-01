"use client";
import Styles from "./Navbar.module.css";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.logo}>
        <Image
          src="/logoo.png"
          alt="Logo"
          width={50}
          height={50}
          priority
          className={Styles.img}
        />
      </div>
      <div className={Styles.home}>
        <div className={Styles.show1}>
          <h3 className={Styles.h4}>Home</h3>
          <h3 className={Styles.h4}>About</h3>
          <h3 className={Styles.h4}>Skills</h3>
          <h3 className={Styles.h4}>Projects</h3>
          <h3 className={Styles.h4}>Experience</h3>
          <h3 className={Styles.h4}>Contact</h3>
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
