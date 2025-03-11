import React from "react";

import { FaDownload, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

//framer motion Animation Variants
const variants = {
  hidden: { y: 50, opacity: 0 },
  visible: (delay) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  }),
};

const contactdata = [
  {
    href: "https://wa.me/+916301726478",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
  },
  {
    href: "https://github.com/chinnukarthik",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sesham-karthik-akank1445/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "mailto:seshamkarthik3@gmail.com",
    icon: <MdOutlineMail />,
    label: "Email",
  },
];

function Herosection() {
  return (
    <section
      className="relative py-20 min-h-screen flex items-center"
      id="home"
    >
      {/* Background Gradient */}
      <div className="absolute right-0 top-[-20%] w-80 h-80 bg-[var(--primary-color-light)] rounded-full blur-[150px] opacity-50"></div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-5 px-5 max-w-7xl mx-auto">
        {/* Hero Content */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
          className="space-y-4 md:ml-5 lg:ml-0"
        >
          <h3 className="text-2xl  md:text-3xl lg:text-4xl font-bold">
            Hi, I am Kartik
          </h3>
          <h1 className="text-4xl lg:text-6xl mb-2 xl:text-[65px] font-bold bg-gradient-to-r from-[var(--primary-color-light)] to-[var(--primary-color)] dark:to-white inline-block text-transparent bg-clip-text">
            Front End Web Developer
          </h1>

          <p className="max-w-2xl text-lg pb-5">
            Passionate about building modern, responsive, and user-friendly web
            applications.
          </p>

          {/* Social Icons */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true }}
            className="flex items-center gap-5 mb-5"
          >
            {contactdata.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="icons relative z-10 text-xl"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            variants={variants}
            initial="hidden"
            whileInView="visible"
            custom={0.5}
            viewport={{ once: true }}
            href="/SESHAM_KARTHIK_RESUME.pdf"
            download="SESHAM_KARTHIK_RESUME.pdf"
            className="w-fit flex items-center gap-2 py-2 px-6 rounded-md bg-gradient-to-r from-[var(--primary-color-light)] to-[var(--primary-color)] text-white font-medium text-lg transition-transform duration-300 hover:scale-105"
          >
            Download CV <FaDownload />
          </motion.a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <img
            src="/PROFILE.jpeg"
            alt="Kartik's Profile Picture"
            className="w-[80%] md:w-[70%] lg:w-[50%] border-2 border-[var(--primary-color)] 
            rotate-[4.5deg] hover:rotate-0 rounded-[40px] 
            transform transition-all duration-300 ease-in-out 
            hover:border-[var(--primary-color-light)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Herosection;
