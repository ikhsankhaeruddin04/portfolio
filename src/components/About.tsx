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
      A fresh graduate in Informatics Engineering with a strong interest in software development and information technology. Experienced in basic programming, web development, computer networking, and system analysis through academic projects and vocational training programs. Also familiar with entry-level game development and functional testing through personal projects. Able to work both independently and in a team environment, highly motivated to learn new technologies, and equipped with good communication skills.

      </p>

    </motion.div>
  );
}
