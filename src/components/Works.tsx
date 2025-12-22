"use client";
import { motion } from "framer-motion";

export default function Works() {
  const works = [
    // {
    //   img: "/work1.png",
    //   title: "Qutopia – Educational HTML5 Game",
    //   category: "Game Development",
    //   link: "https://ikhssan.itch.io/qutopia",
    // },
    // {
    //   img: "/work2.png",
    //   title: "Portfolio Website",
    //   category: "Web Development",
    //   link: "https://portfolio-71d6.vercel.app/",
    // },
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
      "Web-based monitoring system integrated with the Qutopia game, enabling teachers to track student mastery, stages, and learning progress through an admin dashboard.",
    stack: ["PHP", "MySQL", "JavaScript", "REST API"],
    link: "https://mclquiz.my.id/quiz/dashboard.php",
  },
    
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: "var(--bg-card)",
        color: "var(--text-primary)",
        boxShadow: "0 4px 20px var(--shadow-color)",
      }}
      className="p-8 rounded-2xl mt-6"
    >
      <h2 className="text-2xl font-semibold mb-3 border-b border-[var(--pink)] pb-2 inline-block">
        My Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {works.map((w, i) => (
          <motion.a
            key={i}
            href={w.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            style={{ background: "var(--bg-secondary)" }}
            className="rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer shadow-md hover:shadow-pink-500/20"
          >
            <img
              src={w.img}
              alt={w.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{w.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{w.category}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
