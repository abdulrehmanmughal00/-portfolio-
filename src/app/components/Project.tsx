"use client";

import Styles from "./Project.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    image: "/projects/project1.jpg",
    desc: "A modern e-commerce application built with Next.js, TypeScript and Stripe integration.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Password Manager App",
    image: "/passwordManager.png",
    desc: "A modern password manager featuring secure password storage, editing, deletion, and a clean user-friendly design.",
    tech: ["React", "JavaScript", " CSS"],
    link: "https://my-password-manager-lime.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image: "/projects/project3.jpg",
    desc: "A responsive weather dashboard showing real-time weather information using API integration.",
    tech: ["React", "API", "CSS"],
    link: "#",
  },
];

const Project = () => {
  return (
    <section className={Styles.projects} id="projects">
      <div className={Styles.blurOne}></div>
      <div className={Styles.blurTwo}></div>

      <div className={Styles.container}>
        {/* Heading */}

        <div className={Styles.top}>
          <div>
            <p className={Styles.smallHeading}>My Work</p>

            <h2 className={Styles.heading}>
              Featured <span>Projects</span>
            </h2>
          </div>
        </div>

        {/* Cards */}

        <div className={Styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={Styles.projectCard}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}

              <div className={Styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={Styles.projectImg}
                />
              </div>

              {/* Content */}

              <div className={Styles.projectContent}>
                <div className={Styles.projectTop}>
                  <h3 className={Styles.projectTitle}>{project.title}</h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.projectLink}
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <p className={Styles.projectDesc}>{project.desc}</p>

                <div className={Styles.tags}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={Styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
