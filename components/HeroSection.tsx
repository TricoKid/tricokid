"use client";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-yellow-500/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-6"
        >
          Welcome To The TricoVerse
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8"
        >
          TRICOKID
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10"
        >
          Anime. Entertainment. Challenges. Creator Energy.
          A cinematic universe built for the next generation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >

          <button className="group flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full transition duration-300 shadow-[0_0_50px_rgba(255,255,0,0.3)]">
            <FaPlay className="group-hover:scale-110 transition" />
            WATCH NOW
          </button>

          <a
            href="https://youtube.com/@tricokidhere"
            target="_blank"
            className="border border-white/20 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-full transition duration-300"
          >
            Visit YouTube
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute left-1/2 -translate-x-1/2 bottom-[-120px]"
        >
          <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}