"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "var(--bg-card)",
        color: "var(--text-primary)",
        boxShadow: "0 4px 20px var(--shadow-color)",
      }}
      className="p-8 rounded-2xl"
    >
      <h2 className="text-2xl font-semibold mb-3 border-b border-[var(--pink)] pb-2 inline-block">
        About Me
      </h2>

      <p className="text-[var(--text-secondary)] leading-relaxed">
      I am an Informatics Engineering graduate specializing in web development with a strong foundation in modern JavaScript and frontend technologies.

I have experience building responsive and user-centered web applications through academic and personal projects, with a strong focus on clean, maintainable code.

Adaptable, detail-oriented, and quick to learn, I am ready to contribute to a collaborative development team while continuing to grow as a software engineer.

      </p>

    </motion.div>
  );
}
