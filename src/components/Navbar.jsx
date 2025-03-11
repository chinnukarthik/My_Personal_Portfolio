import React, { useState, useEffect, useCallback } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose, IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { useDarkMode } from "../context/Darkmode";

//Navdata
const Navdata = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState("#home");

  // Handle navigation click
  const handleClick = useCallback((href) => {
    setActiveSection(href);
    setToggle(false);

    // Smooth scroll
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  //Tracking section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 lg:p-5 md:p-4">
      <div className="px-3 py-2 flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#home"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color-light)] to-[var(--primary-color)] dark:to-white"
        >
          KARTIK
        </a>

        {/* Navigation Menu */}
        <ul
          className={`absolute lg:static left-0 w-full lg:w-auto bg-white dark:bg-[var(--primary-color)] lg:dark:bg-transparent lg:bg-transparent shadow-lg lg:shadow-none rounded-lg lg:flex space-x-0 md:space-x-8 text-lg text-black dark:text-white p-4 lg:p-0 transition-transform duration-300 ${
            toggle
              ? "top-16 opacity-100 scale-y-100"
              : "top-[-100%] opacity-0 scale-y-0 lg:opacity-100 lg:scale-y-100"
          } origin-top lg:origin-center`}
        >
          {Navdata.map(({ name, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(href);
                }}
                className={`block lg:inline-block py-2 text-lg font-semibold lg:py-0 transition-all ${
                  activeSection === href
                    ? "text-[var(--primary-color-light)] font-bold dark:text-[var(--primary-color-light)]"
                    : "hover:text-[var(--primary-color-light)] font-bold hover:dark:text-[var(--primary-color-light)]"
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode */}
        <div className="flex items-center gap-3 content-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-black dark:text-white hover:text-[var(--primary-color-light)]"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <IoSunnyOutline className="w-6 h-6" />
            ) : (
              <BsMoonStars className="w-5 h-5" />
            )}
          </button>
          {/* mobile menu button */}
          <button
            className="lg:hidden p-2 ring-1 ring-gray-400 rounded"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Navigation"
            aria-expanded={toggle}
          >
            {toggle ? (
              <IoClose className="text-black dark:text-white w-7 h-7" />
            ) : (
              <VscThreeBars className="text-black dark:text-white w-7 h-7" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
