import React from "react";

import CircularProgressBar from "./CircularProgressbar";
import { motion } from "framer-motion";

// Skill Icons
import HtmlIcon from "../assets/ICONS/html-icon.png";
import CssIcon from "../assets/ICONS/css-icon.png";
import JsIcon from "../assets/ICONS/js-icon.png";
import ReactIcon from "../assets/ICONS/react-icon.png";
import NodeIcon from "../assets/ICONS/node-icon.png";
import TailwindIcon from "../assets/ICONS/tailwind-icon.png";

// Skills Data
const skills = [
  { name: "HTML", icon: HtmlIcon, progress: 90 },
  { name: "CSS", icon: CssIcon, progress: 80 },
  { name: "JS", icon: JsIcon, progress: 80 },
  { name: "Tailwind", icon: TailwindIcon, progress: 80 },
  { name: "ReactJS", icon: ReactIcon, progress: 70 },
  { name: "NodeJS", icon: NodeIcon, progress: 65 },
];

const AboutMe = () => {
  return (
    <section className="relative flex flex-col items-center" id="about">
      <h1 className="subtitles mb-6">About Me</h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20 max-w-6xl px-6"
      >
        {/* Profile Image */}
        <img
          src="/Profile.png"
          alt="Profile Picture"
          className="w-48 h-48 md:w-60 md:h-60 lg:w-75 lg:h-75 rounded-full shadow-lg dark:shadow-[var(--primary-color-light)] object-cover duration-300 hover:scale-105"
        />

        {/* About Me Content */}
        <p className="flex-1 text-center md:text-left  lg:text-xl text-base leading-relaxed text-gray-700 dark:text-gray-300">
          Hi, I’m <strong>Sesham Kartik</strong>, a passionate front-end web
          developer with expertise in HTML, CSS, JavaScript, React.js, and
          backend integration tools. I hold a Master’s degree in Computer
          Applications from <em>Dr. K V Subba Reddy Institute of Technology</em>
          . My focus is on crafting responsive, user-friendly applications with
          strong problem-solving capabilities.
        </p>
      </motion.div>

      {/* Skills Block */}
      <div className="w-full bg-[var(--selection-color)] dark:bg-[var(--dark-selection-color)] py-10 mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Skills</h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6 mx-auto px-6 max-w-5xl"
        >
          {skills.map(({ name, icon, progress }) => (
            <CircularProgressBar
              key={name}
              IconName={name}
              progress={progress}
              content={icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
