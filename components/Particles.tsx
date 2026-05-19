"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(30)].map(() => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 6 + Math.random() * 5,
      delay: Math.random() * 5,
      x: Math.random() * 1400,
      y: Math.random() * 800,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-300 shadow-[0_0_20px_#facc15]"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
}