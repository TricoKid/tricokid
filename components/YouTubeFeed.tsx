"use client";

import { useEffect, useState } from "react";

interface Video {
  id: {
    videoId: string;
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
    <section className="py-20 px-6 bg-black text-white">
      <h2 className="text-5xl font-black text-center mb-16">
        Latest Videos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
          >
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}