"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Globe, User, CheckCircle, XCircle } from "lucide-react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<"success" | "error" | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null); // ✅ fix: gunakan ref untuk form

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const contactInfo = [
    // { icon: Mail, title: "Email", value: "ikhsankhaeruddin04@gmail.com" },
    { icon: Phone, title: "Phone", value: "+62 857 2102 5071" },
    { icon: MapPin, title: "Location", value: "Kuningan, Jawa Barat" },
    // { icon: Globe, title: "Website", value: "www.ikhsan-portfolio.vercel.app" },
    { icon: User, title: "Freelance", value: "Available Now" },
  ];

  // ✉️ fungsi kirim email via EmailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_cjr4n6c", // Ganti dengan Service ID kamu
        "template_vsn4mkd", // Ganti dengan Template ID kamu
        formRef.current,
        "PH08m6IhNFjyF2pkp" // Ganti dengan Public Key kamu
      )
      .then(
        () => {
          setPopup("success");
          setLoading(false);
          formRef.current?.reset(); // ✅ aman
        },
        (error) => {
          console.error("FAILED...", error);
          setPopup("error");
          setLoading(false);
        }
      );
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
      className="p-8 rounded-2xl mt-6 relative overflow-hidden"
    >
      <h2 className="text-2xl font-semibold mb-3 border-b border-[var(--pink)] pb-2 inline-block">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {/* FORM SECTION */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          custom={0}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold mb-2">Let’s Work Together!</h3>

          <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--pink)]"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
              }}
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--pink)]"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-md outline-none h-32 resize-none focus:ring-2 focus:ring-[var(--pink)]"
              style={{
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
              }}
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-accent hover:opacity-90 transition px-6 py-3 rounded-md font-semibold text-white w-full flex justify-center items-center"
            >
              {loading ? (
                <motion.span
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </motion.span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>

        {/* INFO SECTION */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              style={{ background: "var(--bg-secondary)" }}
              className={`flex items-center gap-4 p-4 rounded-xl ${
                i === contactInfo.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="bg-gradient-accent p-3 rounded-full">
                <item.icon className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-[var(--text-secondary)] text-sm">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ POPUP SUCCESS / ERROR */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[var(--bg-card)] text-center p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4"
            >
              {popup === "success" ? (
                <CheckCircle className="w-16 h-16 mx-auto text-pink-500 mb-4" />
              ) : (
                <XCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
              )}
              <h3 className="text-2xl font-bold mb-2">
                {popup === "success" ? "Thank You!" : "Oops!"}
              </h3>
              <p className="text-[var(--text-secondary)] mb-6">
                {popup === "success"
                  ? "Your message has been successfully sent."
                  : "Something went wrong. Please try again."}
              </p>
              <button
                onClick={() => setPopup(null)}
                className={`px-6 py-2 rounded-md text-white font-semibold ${
                  popup === "success"
                    ? "bg-gradient-to-r from-pink-500 to-purple-500"
                    : "bg-gradient-to-r from-red-500 to-pink-600"
                }`}
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
