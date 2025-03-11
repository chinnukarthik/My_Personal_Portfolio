import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

// contact content data
const contactData = [
  {
    id: 1,
    name: "Phone",
    icon: FaPhoneAlt,
    content: "+91 6301726478",
    href: "tel:+916301726478",
  },
  {
    id: 2,
    name: "Email",
    icon: MdEmail,
    content: "seshamkarthik3@gmail.com",
    href: "mailto:seshamkarthik3@gmail.com",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: FaLinkedin,
    content: "sesham-karthik-akank1445",
    href: "https://www.linkedin.com/in/sesham-karthik-akank1445/",
  },
  {
    id: 4,
    name: "GitHub",
    icon: FaGithub,
    content: "chinnukarthik",
    href: "https://github.com/chinnukarthik",
  },
  {
    id: 5,
    name: "WhatsApp",
    icon: FaWhatsapp,
    content: "6301726478",
    href: "https://wa.me/+916301726478",
  },
];
//  Email Credential
const SERVICE_ID = "service_rah4aoq";
const TEMPLATE_ID = "template_6inky0c";
const API_KEY = "AuJWlXz4YkKLwzd15";
// handling email
function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, sent: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, sent: false });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, API_KEY);
      setStatus({ loading: false, sent: true });
      formRef.current.reset();
    } catch (error) {
      setStatus({ loading: false, sent: false });
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center mx-3 md:mx-auto"
    >
      <h2 className="subtitles mb-10">Contact Me</h2>
      <div className="flex flex-col lg:flex-row gap-10 w-full md:w-xl lg:w-5xl xl:w-7xl md:mx-auto">
        {/* contact form */}
        <motion.form
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.8 }}
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 p-6 bg-[var(--selection-color)] dark:bg-[var(--dark-selection-color)] border border-[var(--primary-color)] dark:border-[var(--primary-color-light)] rounded-2xl space-y-4"
        >
          <h2 className="text-xl font-bold text-center">Let's Work Together</h2>
          <input
            type="text"
            name="Username"
            placeholder="Enter your Name"
            className="input-field"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Enter your E-mail"
            className="input-field"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="input-field"
            required
          />
          <button
            type="submit"
            className="submit-btn"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
          {status.sent && (
            <p className="text-center text-lg text-green-500 mt-2">
              Message sent successfully! ✅
            </p>
          )}
        </motion.form>
        {/* Contact content */}
        <div className="space-y-4 w-full md:w-1/2 flex flex-col justify-center">
          {contactData.map(({ id, name, icon: Icon, content, href }) => (
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: id * 0.3 }}
              key={id}
              className="flex items-center gap-4"
            >
              <div className="icon-wrapper hover:scale-105 ">
                <Icon />
              </div>
              <div>
                <p className="text-sm font-semibold">{name}</p>
                <a href={href} className="contact-link">
                  {content}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
