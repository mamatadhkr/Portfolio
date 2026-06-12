import { useEffect, useState } from "react";
import profile from "../assets/profile.png";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const texts = [
    "UI/UX Designer",
    "MERN Stack Developer",
    "AI & ML Enthusiast",
    "Creative Thinker",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-5">

          <p className="text-gray-500 text-lg">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-semibold text-gray-800">
            Mamata <span className="text-sky-600">Adhikari</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Computer Engineering Student
          </p>

          <p className="text-sky-600 text-xl font-medium">
            {texts[index]}
          </p>

          <p className="text-gray-500 leading-7 max-w-xl">
            Passionate about building clean user interfaces, solving real-world problems,
            and exploring AI, ML, and modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-2">
           <a
  href="/cv.pdf"
  download
  className="px-6 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
>
  Download CV
</a>

           <a
  href="#contact"
  className="px-6 py-3 border border-sky-600 text-sky-600 rounded-full hover:bg-sky-50 transition"
>
  Contact Me
</a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-2xl text-gray-700 pt-3">
            <a href="https://github.com" target="_blank">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </div>

        </div>

       <div className="flex justify-center lg:justify-end">

  <div className="relative group">

    {/* glowing animated border */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400 via-blue-300 to-sky-500 blur-md opacity-60 group-hover:opacity-80 transition"></div>

    {/* rotating soft ring */}
    <div className="absolute inset-0 rounded-full border-2 border-sky-400 animate-pulse opacity-30"></div>

    {/* image */}
    <img
      src={profile}
      alt="profile"
      className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-2xl
      group-hover:scale-105 transition duration-300"
    />

  </div>

</div>

      </div>
    </section>
  );
}