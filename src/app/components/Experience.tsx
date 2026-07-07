"use client";

import Styles from "./Experience.module.css";
import { motion } from "framer-motion";

const experience = [
  {
    title: "Frontend Developer ",
    company: "Self Learning",
    year: "2024 - Present",
    desc: "Building modern frontend applications using React, Next.js and TypeScript while continuously improving problem solving skills.",
  },
  {
    title: "Personal Projects",
    company: "Independent",
    year: "2024",
    desc: "Developed multiple responsive web applications including portfolio, password manager and UI clone projects.",
  },
];

const Experience = () => {
  return (
    <section className={Styles.experience} id="experience">
      <div className={Styles.blurOne}></div>
      <div className={Styles.blurTwo}></div>

      <div className={Styles.container}>
        {/* Left */}
        <motion.div
          className={Styles.left}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className={Styles.smallHeading}>Career</p>

          <h2 className={Styles.heading}>
            My <span>Experience</span>
          </h2>

          <div className={Styles.line}></div>

          <div className={Styles.timeline}>
            {experience.map((item, index) => (
              <div key={index} className={Styles.item}>
                <span className={Styles.dot}></span>

                <div className={Styles.content}>
                  <div className={Styles.topRow}>
                    <h3>{item.title}</h3>
                    <span className={Styles.year}>{item.year}</span>
                  </div>

                  <h4>{item.company}</h4>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className={Styles.right}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={Styles.card}>
            <h3>2+</h3>
            <span>Years Learning</span>
          </div>

          <div className={Styles.card}>
            <h3>50+</h3>
            <span>Projects Built</span>
          </div>

          <div className={Styles.card}>
            <h3>10+</h3>
            <span>Technologies</span>
          </div>

          <div className={Styles.card}>
            <h3>∞</h3>
            <span>Always Improving</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;