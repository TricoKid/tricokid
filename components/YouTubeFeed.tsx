"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
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
    <section className="relative py-24 px-6 bg-black text-white pointer-events-auto overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-black text-center mb-16"
        >
          Latest Videos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {videos.map((video: Video) => (
            <motion.div
              key={video.id.videoId}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >

              <iframe
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="pointer-events-auto"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold text-white line-clamp-2">
                  {video.snippet.title}
                </h3>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}