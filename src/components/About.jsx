export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        {/* DIRECT INTRO */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I’m <span className="text-sky-600">Mamata</span> 👋
          </h2>

          <p className="text-gray-500 mt-5 leading-7 max-w-2xl mx-auto text-lg">
            I’m a Computer Engineering student passionate about
            building clean, creative, and user-focused digital experiences.
          </p>

          {/* OUTSIDE SCREEN THINKING */}
          <p className="text-gray-500 mt-4 leading-7 max-w-2xl mx-auto">
            When I’m away from my screen, I still think like a designer —
            I observe small details in everyday life, imagine better interfaces,
            and turn random ideas into future project concepts.
          </p>

        </div>

        {/* 3 CORE CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* INTERESTS */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition">

            <h3 className="text-sky-600 font-semibold text-lg">
              Interests Areas
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              UI/UX Designing, MERN Stack, Blockchain,
              AI & Machine Learning.
            </p>

          </div>

          {/* HOBBIES */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition">

            <h3 className="text-sky-600 font-semibold text-lg">
              Hobbies
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Cooking, exploring new places, traveling, hiking,
              listening to music, and discovering cultures.
            </p>

          </div>

          {/* MINDSET */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-6 hover:scale-105 transition">

            <h3 className="text-sky-600 font-semibold text-lg">
              Mindset
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              I believe in consistency, curiosity, and learning by building
              real projects step by step every day.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}