import React, { useRef, useState } from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setStatus(" Please fill all fields.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus(" Please enter a valid email.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    emailjs
      .sendForm(
        "service_orhwddu",
        "template_gdv5nz7",
        form.current,
        { publicKey: "mFlw1C1gnO-hlNm44" }
      )
      .then(
        () => {
          setStatus(" Message sent successfully!");
          e.target.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus(" Failed to send message. Try again.");
          e.target.reset();
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* STATUS POPUP */}
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2
                       bg-white text-black px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {status}
          </motion.div>
        )}

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-3xl font-bold mb-12"
        >
          Connect With Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg">
              Feel free to reach out for work opportunities or collaborations!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FiMail className="text-2xl text-blue-400" />
                <p className="text-gray-300">
                  ramyajaiswal6215@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FiMapPin className="text-2xl text-blue-400" />
                <p className="text-gray-300">
                  Kolkata, West Bengal, India
                </p>
              </div>
            </div>

            <div className="flex gap-6 mt-6 text-3xl">
              <a
                href="https://www.linkedin.com/in/ramya-jaiswal-72b741341/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/RAMYAJAISWAL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/the_ramyajaiswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="bg-slate-800 p-6 rounded-xl shadow-xl space-y-4"
          >
            <div>
              <label className="block mb-2 text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 rounded-md bg-slate-700 text-white
                           outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-md bg-slate-700 text-white
                           outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                rows="4"
                name="message"
                className="w-full p-3 rounded-md bg-slate-700 text-white
                           outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-lg
                         font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
