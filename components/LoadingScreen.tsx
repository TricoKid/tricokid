"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 1 }}
      className="fixed inset-0 z-[9999] pointer-events-none bg-black flex items-center justify-center overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[140px] rounded-full animate-pulse" />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 text-center"
      >

        <motion.h1
          initial={{ letterSpacing: "-20px", opacity: 0 }}
          animate={{ letterSpacing: "2px", opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-8xl font-black text-white"
        >
          TRICOKID
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 uppercase tracking-[0.5em] text-yellow-500 text-sm"
        >
          TricoVerse Loading
        </motion.p>

      </motion.div>

    </motion.div>
  );
}