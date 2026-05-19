"use client";

import { FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-14 border-b border-white/10 pb-14">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black text-white mb-4">
              TRICOKID
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              A cinematic digital universe built around Kerala culture,
              reactions, internet entertainment, interactive content,
              and creator energy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-zinc-400">

              <a href="#" className="hover:text-yellow-400 transition">
                Home
              </a>

              <a href="#" className="hover:text-yellow-400 transition">
                Videos
              </a>

              <a href="#" className="hover:text-yellow-400 transition">
                Community
              </a>

              <a href="#" className="hover:text-yellow-400 transition">
                Interactives
              </a>

            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">
              Connect
            </h3>

            <div className="flex gap-6 text-3xl">

              <a
                href="https://youtube.com/@tricokidhere?si=0rDES4sWOxhKA46j"
                target="_blank"
                className="text-zinc-400 hover:text-red-500 transition hover:scale-125"
              >
                <FaYoutube />
              </a>

              <a
                href="https://instagram.com/tricokid"
                target="_blank"
                className="text-zinc-400 hover:text-pink-500 transition hover:scale-125"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="text-zinc-400 hover:text-indigo-400 transition hover:scale-125"
              >
                <FaDiscord />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 TricoVerse. All rights reserved.
          </p>

          <p className="text-zinc-500 text-sm">
            Built by TricoKid 🚀
          </p>

        </div>

      </div>
    </footer>
  );
}