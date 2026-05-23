"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">
            T
          </div>

          <div>
            <h1 className="text-2xl leading-none font-bold">
              TRICOKID
            </h1>

            <p className="text-xs text-zinc-400 tracking-[0.2em]">
              TRICOVERSE
            </p>
          </div>

        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">

          <Link href="/">
            <span className="hover:text-yellow-400 transition cursor-pointer">
              HOME
            </span>
          </Link>

          <Link href="/videos">
            <span className="hover:text-yellow-400 transition cursor-pointer">
              VIDEOS
            </span>
          </Link>

          <Link href="/community">
            <span className="hover:text-yellow-400 transition cursor-pointer">
              COMMUNITY
            </span>
          </Link>

          <Link href="/interactives">
            <span className="hover:text-yellow-400 transition cursor-pointer">
              INTERACTIVES
            </span>
          </Link>

        </div>

        {/* SOCIALS */}
        <div className="flex items-center gap-4 text-lg">

          <a
            href="https://youtube.com/@tricokidhere?si=0rDES4sWOxhKA46j"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.instagram.com/tricokid"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://discord.gg/qUQc3MFfj"
            target="_blank"
            className="hover:text-indigo-400 transition"
          >
            <FaDiscord />
          </a>

        </div>

      </div>
    </motion.nav>
  );
}