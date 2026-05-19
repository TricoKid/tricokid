"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-zinc-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          data-aos="fade-up"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[0.4em] text-yellow-500 text-sm mb-4">
            About TricoVerse
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            WHO IS TRICOKID?
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            data-aos="fade-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />

              <div className="relative z-10">

                <h3 className="text-4xl font-black mb-8">
                  TRICOKID
                </h3>

                <div className="space-y-5 text-zinc-300 leading-relaxed text-lg">

                  <p>
                    TricoKid is a Kerala-based digital creator focused on
                    reactions, internet culture, cinematic entertainment,
                    interactive content, and community-driven experiences.
                  </p>

                  <p>
                    Built around the idea of blending Kerala vibes with
                    modern creator culture, TricoVerse is designed as more
                    than just a website. It is a growing digital universe.
                  </p>

                  <p>
                    The content includes viral reactions, Kerala facts,
                    internet trends, guessing games, cinematic edits,
                    and immersive experiences inspired by modern web culture.
                  </p>

                </div>

              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            data-aos="fade-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
                <p className="text-zinc-400 uppercase text-sm tracking-[0.3em] mb-3">
                  Real Name
                </p>

                <h4 className="text-2xl font-bold">
                  Arjun K A
                </h4>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
                <p className="text-zinc-400 uppercase text-sm tracking-[0.3em] mb-3">
                  Age
                </p>

                <h4 className="text-2xl font-bold">
                  20 Years Old
                </h4>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
                <p className="text-zinc-400 uppercase text-sm tracking-[0.3em] mb-3">
                  Date of Birth
                </p>

                <h4 className="text-2xl font-bold">
                  07 June 2005
                </h4>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
                <p className="text-zinc-400 uppercase text-sm tracking-[0.3em] mb-3">
                  Creator Focus
                </p>

                <h4 className="text-2xl font-bold">
                  Kerala Culture
                </h4>
              </div>

            </div>

            {/* Socials */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">

              <h3 className="text-3xl font-black mb-8">
                CONNECT
              </h3>

              <div className="space-y-6">

                <a
                  href="https://youtube.com/@tricokidhere?si=0rDES4sWOxhKA46j"
                  target="_blank"
                  className="flex items-center gap-5 text-xl hover:text-yellow-400 transition"
                >
                  <FaYoutube className="text-red-500 text-3xl" />
                  YouTube
                </a>

                <a
                  href="https://www.instagram.com/tricokid"
                  target="_blank"
                  className="flex items-center gap-5 text-xl hover:text-yellow-400 transition"
                >
                  <FaInstagram className="text-pink-500 text-3xl" />
                  Instagram
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}