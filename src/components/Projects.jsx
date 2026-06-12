import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE (soft fade only) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-sky-600 mb-4">
            Projects
          </h2>

          <p className="text-center text-gray-500 mb-12">
            Real-world applications I have built
          </p>
        </motion.div>

        {/* STATIC CLEAN CARD (NO ANIMATION) */}
        <div className="bg-white rounded-2xl shadow-lg border p-8 hover:shadow-xl transition">

          <h3 className="text-2xl font-semibold text-sky-600">
            Aahar – Farmer to Consumer Platform
          </h3>

          <p className="text-gray-600 mt-4 leading-7">
            A MERN stack application connecting farmers directly with consumers
            to reduce dependency on middlemen and improve transparency.
          </p>

          <p className="text-gray-600 mt-3 leading-7">
            Built to support direct agricultural trade and improve farmer profit margins.
          </p>

          <p className="text-gray-500 mt-3">
            <span className="font-medium">Role:</span> Frontend Developer & UI/UX Designer
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/mamatadhkr/Aahar"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-sky-600 font-semibold hover:underline"
          >
            View Project →
          </a>

        </div>

      </div>
    </section>
  );
}