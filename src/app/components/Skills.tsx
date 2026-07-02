import Styles from "./Skill.module.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className={Styles.skillsWrapper} id="skills">
      <motion.div
        className={Styles.part1}
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={Styles.name}>
          My <span className={Styles.span}>Skills</span>
        </h1>
      </motion.div>
      <motion.div
        className={Styles.part2}
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={Styles.techWrapper}>
          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHtml5 />
            <span>HTML</span>
          </motion.div>

          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCss3Alt />
            <span>CSS</span>
          </motion.div>

          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaJsSquare />
            <span>JavaScript</span>
          </motion.div>

          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiTypescript />
            <span>TypeScript</span>
          </motion.div>

          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaReact />
            <span>React</span>
          </motion.div>

          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiNextdotjs />
            <span>Next.js</span>
          </motion.div>

          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiTailwindcss />
            <span>Tailwind</span>
          </motion.div>

          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGitAlt />
            <span>Git</span>
          </motion.div>
          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            <span>GitHub</span>
          </motion.div>
          <motion.div
            className={Styles.tech}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaJava />
            <span>Java</span>
          </motion.div>
        </div>
      </motion.div>
      <div className={Styles.part3}>
        <div className={Styles.progressWrapper}>
          {[
            { name: "React", value: 90 },
            { name: "Next.js", value: 85 },
            { name: "JavaScript", value: 90 },
            { name: "TypeScript", value: 80 },
            { name: "HTML & CSS", value: 95 },
            { name: "Tailwind CSS", value: 88 },
            { name: "Git", value: 90 },
            { name: "GitHub", value: 90 },
            { name: "Java", value: 75 },
          ].map((skill) => (
            <div className={Styles.progressItem} key={skill.name}>
              <div className={Styles.progressHead}>
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>

              <div className={Styles.progressBar}>
                <motion.div
                  className={Styles.progressFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
