import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "experience",
    "leadership",
    "projects",
    "research",
    "contact",
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <img src={logo} className="h-12 md:h-14 object-contain" />

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex gap-7 text-[14px] font-medium text-gray-700">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="hover:text-sky-600 transition tracking-wide"
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="hidden lg:flex items-center gap-4 text-xl text-gray-700">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/mamata.adhk/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden px-6 pb-4 bg-white flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              {l.toUpperCase()}
            </a>
          ))}

          {/* MOBILE SOCIAL */}
          <div className="flex gap-4 text-xl pt-3 text-gray-700">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/mamata.adhk/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}