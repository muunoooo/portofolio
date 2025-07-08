"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentText.slice(0, -1)
        : currentRole.slice(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#272727] text-white px-4 overflow-hidden">
      <div className="z-10 text-center max-w-xl">
        {/* Foto Profil */}
        <motion.img
          src="/muno.png"
          alt="Muno"
          className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm <span className="text-sky-300">Muhammad Naufal</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.h2
          className="text-2xl sm:text-3xl font-medium h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {currentText}
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-lg text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          I’m passionate about building fast, modern, and scalable web
          applications.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          className="mt-8 inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          🚀 View My Work
        </motion.a>
      </div>
    </section>
  );
}
