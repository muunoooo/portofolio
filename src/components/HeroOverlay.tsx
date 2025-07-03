"use client";

import { motion } from "framer-motion";

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
      {/* Foto kamu */}
      <motion.img
        src="/your-photo.jpeg"
        alt="Muno"
        className="w-32 h-32 rounded-full border-4 border-white mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Hi, I'm <span className="text-indigo-300">Muno</span>
      </motion.h1>

      <motion.p
        className="text-lg mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Creative fullstack web developer
      </motion.p>

      <motion.a
        href="#projects"
        className="mt-6 px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow transition"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        🚀 View My Work
      </motion.a>
    </div>
  );
}
