"use client";
import Styles from "./Account.module.css";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiDesktopMouse1 } from "react-icons/ci";
const Account = () => {
  return (
    <div className={Styles.account}>
      
      <a
        href="https://github.com/abdulrehmanmughal00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={Styles.githubIcon} />
      </a>
      <a href="#contact">
        <CgMail className={Styles.gmailIcon} />
      </a>
      <div className={Styles.scrollDiv}>
        <CiDesktopMouse1 className={Styles.scrollIcon} />
        <p style={{color:"grey", fontSize:"10px"}}>scroll down</p>
      </div>
    </div>
  );
};

export default Account;
