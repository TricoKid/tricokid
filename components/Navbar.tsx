"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold">
          TRICOKID
        </h1>

        <div className="flex gap-8">

          <Link href="/">
            HOME
          </Link>

          <Link href="/videos">
            VIDEOS
          </Link>

          <Link href="/community">
            COMMUNITY
          </Link>

          <Link href="/interactives">
            INTERACTIVES
          </Link>

        </div>

      </div>

    </nav>
  );
}