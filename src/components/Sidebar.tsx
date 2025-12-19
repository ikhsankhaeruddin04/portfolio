"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";
import { Phone, MapPin, Mail, Calendar } from "lucide-react";

export default function Sidebar() {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/ikhsankhaeruddin",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/ikhsan-khaeruddin-851102310",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/ikhsankhaeruddin04",
      label: "GitHub",
    },
    {
      icon: FaGlobe,
      href: "https://portfolio-71d6.vercel.app/",
      label: "Website",
    },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "var(--bg-card)",
        color: "var(--text-primary)",
        boxShadow: "0 4px 20px var(--shadow-color)",
      }}
      className="p-6 rounded-2xl text-center w-full md:w-[300px] sticky top-0 self-start"
    >
      <div className="flex flex-col items-center">
        {/* FOTO */}
        <div className="relative mb-4">
          <img
            src="/Ikhsan_Khaeruddin-111 - Copy.png"
            alt="Ikhsan Khaeruddin"
            className="w-36 h-36 rounded-2xl object-cover border-4 border-[var(--bg-secondary)]"
          />
        </div>

        <h2 className="text-2xl font-semibold">Ikhsan Khaeruddin</h2>
        <p className="text-[var(--text-secondary)] text-sm mb-5">
          Fresh Graduate
        </p>

        {/* SOSIAL */}
        <div className="flex justify-center space-x-3 mb-6">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-white hover:bg-gradient-accent transition"
            >
              <Icon size={14} />
            </motion.a>
          ))}
        </div>

        {/* INFO */}
        <div
          className="rounded-xl p-4 w-full text-left text-sm space-y-3"
          style={{ background: "var(--bg-secondary)" }}
        >
          <ContactItem
            icon={<Phone className="w-4 h-4 text-white" />}
            label="Phone"
            value="+62 857 2102 5071"
          />
          <ContactItem
            icon={<MapPin className="w-4 h-4 text-white" />}
            label="Location"
            value="Kuningan, Jawa Barat"
          />
          <ContactItem
            icon={<Mail className="w-4 h-4 text-white" />}
            label="Email"
            value="ikhsankhaeruddin04@gmail.com"
          />
          <ContactItem
            icon={<Calendar className="w-4 h-4 text-white" />}
            label="Birthday"
            value="Jan 4, 2003"
          />
        </div>

        {/* DOWNLOAD CV */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/Ikhsan Khaeruddin-resume.pdf"
          download
          className="mt-6 bg-gradient-accent px-6 py-3 rounded-md font-medium text-white flex items-center gap-2 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Download CV
        </motion.a>
      </div>
    </motion.aside>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-accent p-2 rounded-md">{icon}</div>
      <div>
        <p className="text-[var(--text-secondary)] text-xs">{label}</p>
        <p className="text-[var(--text-primary)] font-medium text-sm break-all">
          {value}
        </p>
      </div>
    </div>
  );
}
