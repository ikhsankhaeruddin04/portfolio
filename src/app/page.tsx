"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Resume from "@/components/Resume";
import Works from "@/components/Works";
// import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { Moon, Sun } from "lucide-react";

// ===================== INTRO ANIMATION =====================
function IntroBounce() {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isBlack, setIsBlack] = useState(true);

  // Simulasi progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2.5; // tambah 2.5% setiap interval
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Ganti warna bola tiap pantulan
  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setIsBlack((prev) => !prev);
    }, 500);
    return () => clearInterval(bounceInterval);
  }, []);

  return (
    <motion.div
      key="intro"
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-[#0f0f0f]" : "bg-[#fde047]"
      }`}
    >
      {/* Bouncing Ball */}
      <motion.div
        animate={{ y: [0, -80, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
        className={`w-14 h-14 rounded-full mb-3 relative shadow-lg ${
          isBlack ? "bg-black" : "bg-white"
        }`}
      >
        {/* Refleksi cahaya */}
        <div
          className={`absolute top-2 left-3 w-3 h-3 rounded-full opacity-70 ${
            isBlack ? "bg-white/70" : "bg-black/30"
          }`}
        />
      </motion.div>

      {/* Shadow di bawah bola */}
      <motion.div
        animate={{
          scaleX: [1, 0.7, 1],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-20 h-3 bg-black/40 rounded-full"
      />

      {/* Loading bar dengan progress */}
      <div className="w-48 h-2 bg-black/20 rounded-full mt-6 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className={`mt-3 text-sm font-medium ${
          theme === "dark" ? "text-gray-300" : "text-gray-800"
        }`}
      >
        Loading... {Math.round(progress)}%
      </motion.p>
    </motion.div>
  );
}

// ===================== MAIN PAGE =====================
export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("Home");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Atur durasi intro sampai selesai 100%
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1000); // delay sedikit sebelum hilang
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* INTRO LOADING */}
      <AnimatePresence mode="wait">
        {loading && <IntroBounce key="intro-screen" />}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.main
            key="main-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`min-h-screen px-6 md:px-10 py-8 flex flex-col md:flex-row gap-10 transition-colors duration-500 ${
              theme === "dark"
                ? "bg-[var(--bg-main)] text-[var(--text-primary)]"
                : "bg-[var(--bg-main)] text-[var(--text-primary)]"
            }`}
          >
            {/* SIDEBAR */}
            <div className="md:w-[300px] flex-shrink-0">
              <Sidebar />
            </div>

            {/* CONTENT */}
            <div className="flex-1 space-y-6 relative">
              {/* HEADER */}
              <header className="flex justify-between items-center mb-4 sticky top-0 z-50 backdrop-blur-md">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Portofolio
                </h1>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-[var(--bg-card)] hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-800" />
                  )}
                </button>
              </header>

              {/* NAVBAR */}
              <Navbar active={active} setActive={setActive} />

              {/* CONTENT SECTIONS */}
              {active === "Home" && (
                <>
                  <About />
                  <WhatIDo />
                </>
              )}
              {active === "Resume" && <Resume />}
              {active === "Works" && <Works />}
              
              {active === "Contact" && <Contact />}
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
