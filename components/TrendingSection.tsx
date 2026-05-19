"use client";

import { motion } from "framer-motion";

const reels = [
  {
    title: "Kerala Street Energy",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Late Night Vibes",
    image:
      "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Internet Culture",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TricoVerse Moments",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TrendingSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          data-aos="fade-up"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="uppercase tracking-[0.4em] text-yellow-500 text-sm mb-4">
            Trending Reels
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            WHAT'S MOVING 🔥
          </h2>
        </motion.div>

        {/* Horizontal Scroll */}
        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">

          {reels.map((reel, index) => (
            <motion.div
              key={index}
              data-aos="zoom-in"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[380px] group relative rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500"
            >

              {/* Image */}
              <div className="relative h-[500px]">
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-yellow-400/10 transition duration-500" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">
                    {reel.title}
                  </h3>

                  <p className="text-zinc-300 mt-2 text-sm">
                    Viral moments from TricoVerse.
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