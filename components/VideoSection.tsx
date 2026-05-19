"use client";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const videos = [
  {
    title: "Kerala Vibes",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c994?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Reaction Energy",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TricoVerse Moments",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function VideoSection() {
  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f172a] to-black opacity-80" />

      {/* Floating Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          data-aos="fade-up"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-yellow-500 text-sm mb-4">
            Featured Content
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            WATCH THE ENERGY
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {videos.map((video, index) => (
            <motion.div
              key={index}
              data-aos="zoom-in"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >

              {/* Image */}
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500" />

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-yellow-500/10" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.6)] group-hover:scale-110 transition duration-300">
                    <FaPlay className="text-black text-3xl ml-1" />
                  </div>
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-2xl font-bold">
                    {video.title}
                  </h3>

                  <p className="text-zinc-300 mt-2 text-sm">
                    TricoVerse cinematic content experience.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}