// "use client";
// import { motion } from "framer-motion";

// export default function Blog() {
//   const posts = [
//     {
//       img: "/blog1.jpg",
//       title: "How I Built My First Game from Scratch",
//       date: "Aug 2025",
//     },
//     {
//       img: "/blog2.jpg",
//       title: "Turning a Figma Design into a Working Website",
//       date: "Sep 2025",
//     },
//     {
//       img: "/blog3.jpg",
//       title: "My Journey as a Fresh Graduate Developer",
//       date: "Oct 2025",
//     },
//   ];
  

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6 },
//     }),
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       style={{
//         background: "var(--bg-card)",
//         color: "var(--text-primary)",
//         boxShadow: "0 4px 20px var(--shadow-color)",
//       }}
//       className="p-8 rounded-2xl mt-6"
//     >
//       <h2 className="text-2xl font-semibold mb-3 border-b border-[var(--pink)] pb-2 inline-block">
//         Blog
//       </h2>
//       <div className="grid md:grid-cols-3 gap-6 mt-6">
//         {posts.map((p, i) => (
//           <motion.div
//             key={i}
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             custom={i}
//             style={{ background: "var(--bg-secondary)" }}
//             className="rounded-xl overflow-hidden hover:scale-105 transition-all"
//           >
//             <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
//             <div className="p-4">
//               <h3 className="font-semibold">{p.title}</h3>
//               <p className="text-[var(--text-secondary)] text-sm">{p.date}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }
