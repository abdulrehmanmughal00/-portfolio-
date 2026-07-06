"use client";

import Styles from "./Home.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <div className={Styles.home} id="home">
      <motion.div
        className={Styles.part1}
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        <div className={Styles.heroText}>
          <p className={Styles.smallText}>Hi, I&apos;m </p>

          <h1 className={Styles.name}>
            Abdul <span className={Styles.span}>Rehman</span>
          </h1>

          <h2 className={Styles.role}>Frontend Developer</h2>

          <p className={Styles.desc}>
            I build responsive and interactive web applications with modern
            technologies. Currently focused on
            <span className={Styles.span}> React</span> ,
            <span className={Styles.span}> Next.js</span> and
            <span className={Styles.span}> TypeScript</span> building
            exceptional user experiences.
          </p>

          <div className={Styles.btnGroup}>
            <a href="#projects">
              <button className={Styles.primaryBtn}>View Projects</button>
            </a>
          </div>

          <div className={Styles.socials}>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={Styles.part2}
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={Styles.heroCircle}>
          {/* Outer Orbit */}
          <motion.div
            className={Styles.orbit1}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className={Styles.dotBig}></span>
          </motion.div>

          {/* Middle Orbit */}
          <motion.div
            className={Styles.orbit2}
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className={Styles.dotSmall}></span>
          </motion.div>

          {/* Small Orbit */}
          <motion.div
            className={Styles.orbit3}
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className={Styles.dotTiny}></span>
          </motion.div>

          <div className={Styles.profile}>
            <Image
              src="/profile.png"
              alt="Logo"
              fill
              className={Styles.img}
              priority
            />
          </div>
        </div>
        <motion.button className={Styles.workBtn}>
          <span className={Styles.status}></span>
          <span>Available for work</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
