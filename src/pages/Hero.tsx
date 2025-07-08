"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { roles } from "@/conts";

export default function HeroPage() {
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
    <section className="min-h-screen flex items-center justify-center px-6 md:px-24 py-12 bg-gradient-to-br from-[#077A7D] to-[#7AE2CF] relative overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-center text-center md:text-left gap-8 md:gap-16 z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight">
            Muhammad <br /> Naufal
          </h1>
          <motion.h2
            className="text-xl sm:text-2xl font-medium h-10 text-white mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {currentText}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden bg-white/20 backdrop-blur-md shadow-xl border border-white/30 transform rotate-3 "
        >
          <Image
            src="/muno.png"
            alt="Foto Muhammad Naufal"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
