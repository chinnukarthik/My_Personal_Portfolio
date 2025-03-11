import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

// Image imports
import ImageOne from "../assets/Project Images/image-one.avif";
import ImageTwo from "../assets/Project Images/image-two.jpg";
import ImageThree from "../assets/Project Images/image-three.jpg";
import ImageFour from "../assets/Project Images/image-four.jpg";
import ImageFive from "../assets/Project Images/image-five.jpg";

// Projects Data
const projects = [
  {
    id: 1,
    title: "Project-1",
    description: "Lorem ipsum dolor sit amet.",
    image: ImageOne,
  },
  {
    id: 2,
    title: "Project-2",
    description: "Lorem ipsum dolor sit amet.",
    image: ImageTwo,
  },
  {
    id: 3,
    title: "Project-3",
    description: "Lorem ipsum dolor sit amet.",
    image: ImageThree,
  },
  {
    id: 4,
    title: "Project-4",
    description: "Lorem ipsum dolor sit amet.",
    image: ImageFour,
  },
  {
    id: 5,
    title: "Project-5",
    description: "Lorem ipsum dolor sit amet.",
    image: ImageFive,
  },
];

function Projects() {
  return (
    <section className="px-2 md:px-4" id="projects">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="subtitles">Projects</h2>
        <p className="max-w-2xl text-lg">Things I've built so far</p>
      </div>

      {/* Project Section */}
      <div className="mt-6 relative rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {projects.map(({ id, title, description, image }, index) => (
            <motion.a
              key={id}
              href="#"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="card relative bg-[var(--selection-color)] dark:bg-[var(--dark-selection-color)] 
              p-5 lg:p-8 rounded-2xl border border-transparent hover:border-[var(--primary-color)] 
              duration-300 overflow-hidden group"
            >
              <img src={image} alt={title} className="w-full rounded-lg" />

              {/* Project description */}
              <div
                className="absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8 
                bg-gradient-to-r from-[var(--primary-color-light)] to-[var(--primary-color)] 
                text-white rounded-t-2xl duration-500 group-hover:bottom-0"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold lg:text-3xl">{title}</p>
                    <p className="text-sm">{description}</p>
                  </div>
                  <FaArrowRightLong className="text-2xl" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
