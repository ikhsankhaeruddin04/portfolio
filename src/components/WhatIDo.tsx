"use client";
import { motion } from "framer-motion";
import { FaGamepad, FaCode, FaPaintBrush, FaLightbulb } from "react-icons/fa";


export default function WhatIDo() {
  const items = [
    {
      icon: <FaGamepad />,
      title: "Game Development (Entry-Level)",
      desc: "Developing simple 2D/3D games and interactive gameplay mechanics using Unity and C# through personal and academic projects.",
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Building basic and responsive web applications using HTML, CSS, JavaScript, and modern frameworks such as React and Next.js.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI Implementation",
      desc: "Implementing UI designs into clean, functional, and responsive user interfaces based on provided design guidelines.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving & Testing",
      desc: "Applying logical thinking to identify issues, perform basic debugging, and support functional testing in software and game projects.",
    },
  ];
  
  

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "var(--bg-card)",
        color: "var(--text-primary)",
        boxShadow: "0 4px 20px var(--shadow-color)",
      }}
      className="p-8 rounded-2xl mt-6"
    >
      <h2 className="text-2xl font-semibold mb-3 border-b border-[var(--pink)] pb-2 inline-block">
        What I Do
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(135deg, var(--pink), var(--purple))",
              boxShadow: "0 0 25px rgba(236, 72, 153, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{ background: "var(--bg-secondary)" }}
            className="p-6 rounded-2xl text-center transition-all duration-300 group"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
              className="text-4xl mb-3 text-transparent bg-clip-text bg-gradient-to-br from-[var(--pink)] to-[var(--purple)] group-hover:scale-110 transition-transform"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
