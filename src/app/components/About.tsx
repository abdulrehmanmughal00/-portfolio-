"use client";

import Styles from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className={Styles.about} id="about">
      {/* Background Glow */}
      <div className={Styles.blurOne}></div>
      <div className={Styles.blurTwo}></div>

      {/* Animated Top Dot */}
      <motion.div
        className={Styles.topDot}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className={Styles.container}>
        {/* LEFT */}
        <motion.div
          className={Styles.left}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className={Styles.smallHeading}>Get To Know Me</p>

          <h2 className={Styles.heading}>
            About <span>Me</span>
          </h2>

          <div className={Styles.line}></div>

          <p className={Styles.desc}>
            This is Abdul Rehman, a Frontend Developer with two years of
            hands-on learning and project-building experience. I specialize in
            <span className={Styles.span}> React</span>,
            <span className={Styles.span}> Next.js</span> , and
            <span className={Styles.span}> TypeScript</span> , creating
            responsive and modern web applications.
          </p>

          <p className={Styles.desc}>
            Alongside my college education, I continuously improve my skills by
            building projects, exploring new
            <span className={Styles.span}> technologies</span> , and following
            modern frontend development practices.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={Styles.right}
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div whileHover={{ y: -8 }} className={Styles.card}>
            <h3>2+</h3>
            <p>Years Learning</p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className={Styles.card}>
            <h3>50+</h3>
            <p>Frontend Projects</p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className={Styles.card}>
            <h3>100%</h3>
            <p>Responsive Design</p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className={Styles.card}>
            <h3>∞</h3>
            <p>Always Learning</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
