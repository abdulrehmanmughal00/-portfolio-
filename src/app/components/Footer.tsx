"use client";

import Styles from "./Footer.module.css";
import {
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.glowLeft}></div>
      <div className={Styles.glowRight}></div>

      <h1 className={Styles.name}>
            Abdul <span className={Styles.span}>Rehman</span>
          </h1>

      <div className={Styles.line}></div>

      <div className={Styles.socials}>
        <a href="#">
          <FaXTwitter />
        </a>

        <a
          href="https://www.instagram.com/abdulrehmanmughalll"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://github.com/abdulrehmanmughal00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <p className={Styles.quote}>&ldquo;Keep learning. Keep growing.&rdquo;</p>

      <p className={Styles.copy}>© 2026 Abdul Rehman . All rights reserved.</p>
    </footer>
  );
};

export default Footer;
