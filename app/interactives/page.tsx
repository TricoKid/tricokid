"use client";

import { useEffect, useState } from "react";

const categories = {
  anime: [
    "Naruto",
    "Gojo",
    "Luffy",
    "Levi",
    "Eren",
    "Sukuna",
    "Itachi",
  ],

  bikes: [
    "Hayabusa",
    "H2R",
    "Duke 390",
    "R1",
    "ZX10R",
    "BMW S1000RR",
  ],

  celebrities: [
    "Mohanlal",
    "Mammootty",
    "Messi",
    "Ronaldo",
    "MrBeast",
    "IShowSpeed",
  ],
};

function getRandomCategory() {
  const keys = Object.keys(categories);
  return keys[Math.floor(Math.random() * keys.length)];
}

function getRandomBattle() {

  const category = getRandomCategory();

  const items =
    categories[category as keyof typeof categories];

  const shuffled = [...items].sort(
    () => Math.random() - 0.5
  );

  return {
    heading: "WHO WINS?",
    optionA: shuffled[0],
    optionB: shuffled[1],
    answer:
      shuffled[Math.floor(Math.random() * 2)],
  };
}

export default function InteractivesPage() {

  const [battle, setBattle] = useState<any>(null);

  const [selected, setSelected] = useState("");

  const [correct, setCorrect] = useState<boolean | null>(
    null
  );

  const generateBattle = () => {
    setBattle(getRandomBattle());
    setSelected("");
    setCorrect(null);
  };

  useEffect(() => {
    generateBattle();
  }, []);

  if (!battle) return null;

  const handleChoice = (choice: string) => {

    if (selected) return;

    const isRight = choice === battle.answer;

    setSelected(choice);
    setCorrect(isRight);

    setTimeout(() => {
      generateBattle();
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full top-20 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-6xl">

        {/* TITLE */}
        <h1 className="text-center text-yellow-400 tracking-[0.4em] text-sm mb-4">
          TRICOVERSE BATTLE
        </h1>

        <h2 className="text-center text-5xl md:text-7xl font-black mb-14">
          {battle.heading}
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* OPTION A */}
          <button
            onClick={() => handleChoice(battle.optionA)}
            className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
              selected === battle.optionA
                ? correct
                  ? "border-green-500 scale-105"
                  : "border-red-500 scale-95"
                : "border-white/10 hover:border-yellow-500"
            }`}
          >

            <div className="relative h-[450px]">

              <img
                src={`https://source.unsplash.com/featured/800x800/?${battle.optionA}`}
                alt={battle.optionA}
                className="w-full h-full object-cover"
              />

            </div>

            <div className="bg-zinc-900 p-6 text-center text-3xl font-bold">
              {battle.optionA}
            </div>

          </button>

          {/* OPTION B */}
          <button
            onClick={() => handleChoice(battle.optionB)}
            className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
              selected === battle.optionB
                ? correct
                  ? "border-green-500 scale-105"
                  : "border-red-500 scale-95"
                : "border-white/10 hover:border-yellow-500"
            }`}
          >

            <div className="relative h-[450px]">

              <img
                src={`https://source.unsplash.com/featured/800x800/?${battle.optionB}`}
                alt={battle.optionB}
                className="w-full h-full object-cover"
              />

            </div>

            <div className="bg-zinc-900 p-6 text-center text-3xl font-bold">
              {battle.optionB}
            </div>

          </button>

        </div>

        {/* FOOTER */}
        <p className="text-center text-zinc-500 mt-8">
          Choose wisely 😈
        </p>

      </div>
    </main>
  );
}