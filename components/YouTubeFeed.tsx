"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

export default function YouTubeFeed() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("/api/youtube")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items || []);
      });
  }, []);

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-black text-center mb-16"
        >
          LATEST VIDEOS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-zinc-100 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                  <FaPlay className="text-black text-2xl ml-1" />
                </div>
              </div>

              {/* Title */}
              <div className="p-5">
                <h3 className="font-bold text-lg line-clamp-2">
                  {video.snippet.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}