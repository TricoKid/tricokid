"use client";

import { useState } from "react";
import Image from "next/image";

const questions = [
  {
    heading: "WHO IS MORE POPULAR?",
    optionA: {
      name: "Gojo",
      image: "https://i.imgur.com/6VBx3io.jpg",
    },
    optionB: {
      name: "Naruto",
      image: "https://i.imgur.com/tXNdH7I.jpg",
    },
    answer: "Naruto",
  },

  {
    heading: "WHICH BIKE IS MORE ICONIC?",
    optionA: {
      name: "Hayabusa",
      image: "https://i.imgur.com/FWZ6G1x.jpg",
    },
    optionB: {
      name: "H2R",
      image: "https://i.imgur.com/N9Koevq.jpg",
    },
    answer: "Hayabusa",
  },

  {
    heading: "WHO IS MORE FAMOUS?",
    optionA: {
      name: "Mohanlal",
      image: "https://i.imgur.com/U6LwS4m.jpg",
    },
    optionB: {
      name: "Mammootty",
      image: "https://i.imgur.com/5hmdG4x.jpg",
    },
    answer: "Mohanlal",
  },
];

export default function InteractivesPage() {

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = questions[current];

  const handleChoice = (choice: string) => {

    if (selected) return;

    const correct = choice === question.answer;

    setSelected(choice);
    setIsCorrect(correct);

    setTimeout(() => {

      setSelected("");
      setIsCorrect(null);

      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        setCurrent(0);
      }

    }, 1000);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      <div className="relative z-10 w-full max-w-6xl">

        <h1 className="text-center text-yellow-400 tracking-[0.3em] text-sm mb-6">
          TRICOVERSE INTERACTIVE
        </h1>

        <h2 className="text-center text-4xl md:text-6xl font-black mb-12">
          {question.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* OPTION A */}
          <button
            onClick={() => handleChoice(question.optionA.name)}
            className={`rounded-3xl overflow-hidden border transition-all duration-300 ${
              selected === question.optionA.name
                ? isCorrect
                  ? "border-green-500 scale-105"
                  : "border-red-500 scale-95"
                : "border-white/10 hover:border-yellow-500"
            }`}
          >

            <div className="relative h-[400px]">

              <Image
                src={question.optionA.image}
                alt={question.optionA.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-6 text-center text-2xl font-bold bg-zinc-900">
              {question.optionA.name}
            </div>

          </button>

          {/* OPTION B */}
          <button
            onClick={() => handleChoice(question.optionB.name)}
            className={`rounded-3xl overflow-hidden border transition-all duration-300 ${
              selected === question.optionB.name
                ? isCorrect
                  ? "border-green-500 scale-105"
                  : "border-red-500 scale-95"
                : "border-white/10 hover:border-yellow-500"
            }`}
          >

            <div className="relative h-[400px]">

              <Image
                src={question.optionB.image}
                alt={question.optionB.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-6 text-center text-2xl font-bold bg-zinc-900">
              {question.optionB.name}
            </div>

          </button>

        </div>

        <p className="text-center text-zinc-500 mt-8">
          Choose wisely 😈
        </p>

      </div>

    </main>
  );
}