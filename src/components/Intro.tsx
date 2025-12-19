"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Intro() {
  const [show, setShow] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000); // tampil 3 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-colors duration-500 ${
            theme === "dark"
              ? "bg-[#0f0f0f]"
              : "bg-gradient-to-br from-pink-100 via-white to-blue-100"
          }`}
        >
          {/* LOGO atau TEKS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "linear",
              }}
              className="w-16 h-16 rounded-full border-4 border-t-pink-500 border-gray-400 mx-auto mb-5"
            />
            <h1
              className={`text-3xl md:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Ikhsan Khaeruddin
            </h1>
            <p
              className={`mt-2 text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              UI/UX Designer & Frontend Developer
            </p>

            {/* Loading bar */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              className="h-1 mt-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
              style={{ maxWidth: "200px", margin: "0 auto" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
