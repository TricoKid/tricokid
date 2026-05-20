import HeroVideo from "@/components/HeroVideo";
import SubCounter from "@/components/SubCounter";
import YouTubeFeed from "@/components/YouTubeFeed";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TrendingSection from "@/components/TrendingSection";
import Particles from "@/components/Particles";
import VideoSection from "@/components/VideoSection";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* LOADING SCREEN */}
      <LoadingScreen />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

        {/* PARTICLES */}
        <Particles />

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071111] via-black to-black opacity-90" />

        {/* FLOATING GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[140px] rounded-full top-1/3" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl">

          {/* SMALL TEXT */}
          <p
            data-aos="fade-up"
            className="uppercase tracking-[0.4em] text-yellow-500 text-sm md:text-base mb-6"
          >
            Facts. Culture. Community.
          </p>

          {/* MAIN TITLE */}
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className="text-6xl md:text-8xl font-black leading-none"
          >
            TRICOKID
          </h1>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="mt-8 text-zinc-400 text-lg md:text-2xl leading-relaxed"
          >
            Kerala culture, reaction content, interactive games,
            cinematic vibes, and internet energy built into one
            digital universe.
          </p>

          {/* BUTTONS */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
          >
            <button className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-black px-8 py-4 rounded-full font-semibold shadow-[0_0_30px_rgba(250,204,21,0.5)]">
              Watch Videos
            </button>

            <button className="border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 px-8 py-4 rounded-full font-semibold">
              Join TricoVerse
            </button>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">

          <h2
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-bold mb-10"
          >
            Enter The TricoVerse
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A world of reactions, Kerala internet culture,
            viral entertainment, gaming, memes, and cinematic storytelling
            crafted for the next generation.
          </p>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {/* CARD 1 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                Reaction Content
              </h3>

              <p className="text-zinc-400">
                Viral moments, Malayalam internet culture,
                and entertaining commentary.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                Interactive Games
              </h3>

              <p className="text-zinc-400">
                Guess challenges, community interaction,
                and engaging experiences.
              </p>
            </div>

            {/* CARD 3 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                Cinematic Vibes
              </h3>

              <p className="text-zinc-400">
                Dark aesthetics, glowing visuals,
                and immersive storytelling energy.
              </p>
            </div>

          </div>
        </div>
      </section>
<section className="relative h-screen overflow-hidden">
  <HeroVideo />

  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-white text-6xl font-bold">
      TRICOKID
    </h1>
  </div>
</section>
<HeroVideo />
<SubCounter />
<YouTubeFeed />
<VideoSection />
<AboutSection />
<Footer />
    </main>
  
  );
}