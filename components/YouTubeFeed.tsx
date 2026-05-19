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
    <section className="relative py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black text-center mb-16"
        >
          Latest Videos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video: Video) => (
            <div
              key={video.id.videoId}
              className="bg-zinc-900 rounded-3xl overflow-hidden"
            >
              <iframe
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <div className="p-5">
                <h3 className="text-lg font-bold">
                  {video.snippet.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}