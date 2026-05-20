"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  }, [selectedVideo]);

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-black text-center mb-16 text-white"
      >
        Latest Videos
      </motion.h2>

      {/* Video Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <motion.div
            key={video.id.videoId}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => setSelectedVideo(video.id.videoId)}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 hover:border-yellow-400 transition duration-300">

              {/* Thumbnail */}
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition duration-300">
                  <span className="text-4xl ml-2 text-white">▶</span>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h3 className="font-bold text-xl line-clamp-2 text-white">
                  {video.snippet.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Video Popup */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center px-4">

          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 z-[999999] bg-red-600 hover:bg-red-700 text-white text-2xl w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
          >
            ✕
          </button>

          {/* Video Container */}
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(255,0,0,0.3)]">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}