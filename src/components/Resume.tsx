"use client";
import { motion } from "framer-motion";

export default function Resume() {
  const education = [
    {
      year: "2021 - 2025",
      title: "Bachelor of Informatics Engineering",
      place: "Universitas Kuningan",
      desc: "Completed Informatics Engineering curriculum with a focus on software development, web development, system analysis, and basic computer networking. Participated in academic and practical IT projects, including entry-level game development projects.",
    },
    {
      year: "2018 - 2021",
      title: "Senior High School (Science)",
      place: "SMAN 1 Ciawi Gebang",
      desc: "Studied science and mathematics, developing analytical thinking and an early interest in information technology.",
    },
  ];
  

  const experience = [
    {
      year: "Sep 2023",
      title: "Junior Web Developer (Vocational Training)",
      place: "Vocational School Graduate Academy (VSGA)",
      desc: "Developed simple web applications using HTML, CSS, and JavaScript. Implemented responsive UI designs, assisted in testing and debugging applications, collaborated in team-based projects, and managed source code using Git version control.",
    },
    {
      year: "Feb 2023",
      title: "Junior Network Administrator (Vocational Training)",
      place: "Vocational School Graduate Academy (VSGA)",
      desc: "Performed basic computer network configuration including LAN setup, IP addressing, and subnetting. Installed and configured network devices, monitored network connectivity, and assisted in basic troubleshooting and documentation.",
    },
    {
      year: "2025",
      title: "Game Developer (Personal Project)",
      place: "Qutopia – Educational HTML5 Game",
      desc: "Developed a browser-based educational game using Unity and C#. Implemented interactive gameplay mechanics, conducted functional testing and bug fixing, deployed the game to HTML5, and published the project publicly on itch.io.",
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
        Resume
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* EDUCATION */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-[var(--pink)]">Education</h3>
          <div className="relative pl-6 border-l-2 border-[var(--pink)]/40 space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="relative pl-4"
              >
                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-gradient-accent rounded-full border-2 border-[var(--bg-card)]" />
                <p className="text-sm text-[var(--text-secondary)]">{item.year}</p>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-[var(--pink)] text-sm font-medium">{item.place}</p>
                <p className="text-[var(--text-secondary)] text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-[var(--pink)]">Experience</h3>
          <div className="relative pl-6 border-l-2 border-[var(--pink)]/40 space-y-6">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="relative pl-4"
              >
                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-gradient-accent rounded-full border-2 border-[var(--bg-card)]" />
                <p className="text-sm text-[var(--text-secondary)]">{item.year}</p>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-[var(--pink)] text-sm font-medium">{item.place}</p>
                <p className="text-[var(--text-secondary)] text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
