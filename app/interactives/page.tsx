"use client";

import { useEffect, useState } from "react";

import { questions } from "./questions";

import { getWikipediaImage } from "@/lib/getImage";

const filteredQuestions = (
  category: string
) => {
  return questions.filter(
    (q) => q.category === category
  );
};

export default function InteractivesPage() {

  const [selectedCategory, setSelectedCategory] =
    useState("anime");

  const [question, setQuestion] = useState(
    filteredQuestions("anime")[
      Math.floor(
        Math.random() *
        filteredQuestions("anime").length
      )
    ]
  );

  const [score, setScore] = useState(0);

  const [streak, setStreak] = useState(0);

  const [totalAnswered, setTotalAnswered] =
    useState(0);

  const [imageA, setImageA] = useState("");

  const [imageB, setImageB] = useState("");

  const [loadingImages, setLoadingImages] =
    useState(true);

  const [selected, setSelected] = useState("");

  const [correct, setCorrect] =
    useState<boolean | null>(null);

  useEffect(() => {

    async function loadImages() {

      setLoadingImages(true);

      const a = await getWikipediaImage(
        question.optionA
      );

      const b = await getWikipediaImage(
        question.optionB
      );

      setImageA(a);

      setImageB(b);

      setLoadingImages(false);
    }

    loadImages();

  }, [question]);

  const nextQuestion = () => {

    const categoryQuestions =
      filteredQuestions(selectedCategory);

    const randomIndex = Math.floor(
      Math.random() *
      categoryQuestions.length
    );

    setQuestion(
      categoryQuestions[randomIndex]
    );

    setSelected("");

    setCorrect(null);
  };

  const handleChoice = (choice: string) => {

    if (selected) return;

    const isRight =
      choice === question.answer;

    setTotalAnswered((prev) => prev + 1);

    if (isRight) {

      setScore((prev) => prev + 1);

      setStreak((prev) => prev + 1);

    } else {

      setStreak(0);

    }

    setSelected(choice);

    setCorrect(isRight);

    setTimeout(() => {

      nextQuestion();

    }, 1200);
  };

  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full top-20 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-6xl py-20">

        {/* TITLE */}
        <h1 className="text-center text-yellow-400 tracking-[0.4em] text-sm mb-4">
          TRICOVERSE BATTLE
        </h1>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">

          {[
            "anime",
            "football",
            "bikes",
            "movies",
            "malayalam cinema",
            "gaming",
            "streamers",
            "internet culture"
          ].map((category) => (

            <button
              key={category}

              onClick={() => {

                setSelectedCategory(category);

                const categoryQuestions =
                  filteredQuestions(category);

                const randomIndex = Math.floor(
                  Math.random() *
                  categoryQuestions.length
                );

                setQuestion(
                  categoryQuestions[randomIndex]
                );

              }}

              className={`px-5 py-2 rounded-full border transition-all duration-300 uppercase tracking-wider text-sm font-bold ${
                selectedCategory === category
                  ? "bg-yellow-500 text-black border-yellow-500"
                  : "bg-white/5 border-white/10 hover:border-yellow-500"
              }`}
            >

              {category}

            </button>

          ))}

        </div>

        {/* SCORE HUD */}
        <div className="flex items-center justify-center gap-6 mb-8 text-sm md:text-lg flex-wrap">

          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            ⭐ Score: {score}
          </div>

          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            🔥 Streak: {streak}
          </div>

          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            🎯 Accuracy: {
              totalAnswered === 0
                ? 0
                : Math.round(
                    (score / totalAnswered) * 100
                  )
            }%
          </div>

        </div>

        {/* QUESTION */}
        <h2 className="text-center text-4xl md:text-7xl font-black mb-14">
          {question.heading}
        </h2>

        {/* OPTIONS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* OPTION A */}
          <button
            onClick={() =>
              handleChoice(question.optionA)
            }
            className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
              selected === question.optionA
                ? correct
                  ? "border-green-500 scale-105"
                  : "border-red-500 scale-95"
                : "border-white/10 hover:border-yellow-500"
            }`}
          >

            <div className="relative h-[450px] bg-zinc-900">

              {loadingImages ? (

                <div className="w-full h-full bg-zinc-800 animate-pulse" />

              ) : (

                <img
                  src={imageA}
                  alt={question.optionA}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

              )}

            </div>

            <div className="bg-zinc-900 p-6 text-center text-3xl font-bold">
              {question.optionA}
            </div>

          </button>

          {/* OPTION B */}
          <button
            onClick={() =>
              handleChoice(question.optionB)
            }
            className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
              selected === question.optionB
                ? correct
                  ? "border-green-500 scale-105"
                  : "border-red-500 scale-95"
                : "border-white/10 hover:border-yellow-500"
            }`}
          >

            <div className="relative h-[450px] bg-zinc-900">

              {loadingImages ? (

                <div className="w-full h-full bg-zinc-800 animate-pulse" />

              ) : (

                <img
                  src={imageB}
                  alt={question.optionB}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

              )}

            </div>

            <div className="bg-zinc-900 p-6 text-center text-3xl font-bold">
              {question.optionB}
            </div>

          </button>

        </div>

      </div>

    </main>
  );
}