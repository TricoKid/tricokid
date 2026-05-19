"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

export default function SubCounter() {
  const [subs, setSubs] = useState<number>(0);

  useEffect(() => {
    async function fetchSubs() {
      try {
        const res = await fetch("/api/subscribers");
        const data = await res.json();

        setSubs(Number(data.subscribers));
      } catch (err) {
        console.log(err);
      }
    }

    fetchSubs();
  }, []);

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-16 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_50px_rgba(255,0,0,0.5)]">
            <FaYoutube className="text-white text-5xl" />
          </div>
        </div>

        <p className="uppercase tracking-[0.4em] text-zinc-400 text-sm mb-4">
          LIVE YOUTUBE COMMUNITY
        </p>

        <h2 className="text-6xl md:text-8xl font-black mb-6">
          <CountUp end={subs} duration={3} separator="," />
        </h2>

        <p className="text-zinc-400 text-lg">
          People connected to the TricoVerse universe.
        </p>
      </motion.div>
    </section>
  );
}