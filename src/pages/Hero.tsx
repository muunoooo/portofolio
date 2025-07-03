"use client";

import { useEffect, useState } from "react";

const roles = [
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-sky-800 to-blue-600 text-white px-4">
      <div className="text-center max-w-xl">
        <img
          src="/test_photo.jpeg"
          className="w-32 h-32 rounded-full mx-auto mb-6"
          alt="Muno"
        />

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-sky-300">Muhammad Naufal</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium h-10">
          {currentText}
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </h2>
        <p className="mt-6 text-lg text-gray-200">
          I’m passionate about building fast, modern, and scalable web
          applications.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
