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
      Frontend Developer specializing in React and Next.js with hands-on experience building responsive web
applications through academic projects and professional training. Strong foundation in modern JavaScript,
API integration, and user-focused interface development. Comfortable collaborating in team environments
and continuously improving technical skills.

      </p>

    </motion.div>
  );
}
