"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/youtube")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items || []);
      });
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedVideo]);

  return (
    <section className="py-20 px-6 bg-black text-white relative z-10">
      <h2 className="text-5xl font-bold text-center mb-14">
        Latest Videos
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {videos.map((video, index) => (
          <motion.div
            key={video.id.videoId}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedVideo(video.id.videoId)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 hover:border-yellow-400 transition duration-300">

              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300">
                  <span className="text-4xl ml-2">▶</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h3 className="font-bold text-xl line-clamp-2">
                  {video.snippet.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] flex items-center justify-center p-4 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-[10000] bg-black/70 w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl hover:text-yellow-400 transition"
              >
                ✕
              </button>

              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}