"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* =======================
   TYPE DEFINITION
======================= */
type Work = {
  img: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  link: string;
};

export default function Works() {
  /* =======================
     STATE
  ======================= */
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  /* =======================
     DATA
  ======================= */
  const works: Work[] = [
    {
      img: "/work1.png",
      title: "Qutopia – Educational HTML5 Game",
      category: "Game Development",
      description:
        "Educational game designed to improve student learning through interactive stages and scoring mechanics.",
      stack: ["Unity", "C#", "Game Design"],
      link: "https://ikhssan.itch.io/qutopia",
    },
    {
      img: "/work2.png",
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "Personal portfolio website to showcase projects, skills, and experiences with responsive design.",
      stack: ["Next.js", "React", "Tailwind CSS"],
      link: "https://portfolio-71d6.vercel.app/",
    },
    {
      img: "/work3.png",
      title: "Qutopia – Game-Based Learning & Student Monitoring System",
      category: "Web Development",
      description:
        "Game-integrated web dashboard for teachers to monitor student mastery, stages, and learning progress using REST APIs.",
      stack: ["PHP", "MySQL", "JavaScript", "REST API"],
      link: "https://mclquiz.my.id/quiz/dashboard.php",
    },
  ];

  return (
    <section className="p-8 rounded-2xl mt-6 bg-[var(--bg-card)]">
      <h2 className="text-2xl font-semibold mb-6 border-b border-[var(--pink)] pb-2 inline-block">
        My Works
      </h2>

      {/* =======================
          GRID
      ======================= */}
      <div className="grid md:grid-cols-3 gap-6">
        {works.map((w, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedWork(w)}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer rounded-xl overflow-hidden bg-[var(--bg-secondary)] shadow-md hover:shadow-pink-500/20"
          >
            <img
              src={w.img}
              alt={w.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{w.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {w.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* =======================
          MODAL DETAIL
      ======================= */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="bg-[var(--bg-card)] p-6 rounded-2xl max-w-lg w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-3 right-3 text-lg"
              >
                ✕
              </button>

              <img
                src={selectedWork.img}
                alt={selectedWork.title}
                className="rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold mb-1">
                {selectedWork.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                {selectedWork.category}
              </p>

              <p className="mb-4">{selectedWork.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedWork.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={selectedWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Visit Project →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
