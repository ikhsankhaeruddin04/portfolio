"use client";
import { motion } from "framer-motion";
import { FaGamepad, FaCode, FaPaintBrush, FaLightbulb } from "react-icons/fa";


export default function WhatIDo() {
  const items = [
    {
      icon: <FaGamepad />,
      title: "Frontend Development",
      desc: "Develop responsive, high-performance web applications using React and modern JavaScript, emphasizing usability and scalable architecture.",
    },
    {
      icon: <FaCode />,
      title: "UI Engineering",
      desc: "Translate design concepts into scalable, pixel-accurate interfaces while maintaining accessibility and cross-device consistency.",
    },
    {
      icon: <FaPaintBrush />,
      title: "API Integration",
      desc: "Integrate RESTful APIs to deliver dynamic and data-driven user experiences.",
    },
    {
      icon: <FaLightbulb />,
      title: "Web Performance & Optimization",
      desc: "Optimize web performance by writing efficient code and ensuring fast, smooth user experiences across modern applications.",
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
        Core Expertise
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
