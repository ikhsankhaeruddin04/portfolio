"use client";
import { motion } from "framer-motion";
import { Home, FileText, Briefcase, Newspaper, Mail } from "lucide-react";

const tabs = [
  { name: "Home", icon: Home },
  { name: "Resume", icon: FileText },
  { name: "Works", icon: Briefcase },
  // { name: "Blog", icon: Newspaper },
  { name: "Contact", icon: Mail },
];

export default function Navbar({
  active,
  setActive,
}: {
  active: string;
  setActive: (t: string) => void;
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "var(--bg-card)",
        boxShadow: "0 4px 20px var(--shadow-color)",
      }}
      className="backdrop-blur-md p-3 rounded-2xl flex justify-between md:justify-center gap-3 sticky top-6 z-40 w-fit mx-auto"
    >
      {tabs.map(({ name, icon: Icon }) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={name}
          onClick={() => setActive(name)}
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
            active === name
              ? "bg-gradient-accent text-white"
              : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-gradient-accent hover:text-white"
          }`}
        >
          <Icon size={16} />
          <span className="mt-1">{name}</span>
        </motion.button>
      ))}
    </motion.nav>
  );
}
