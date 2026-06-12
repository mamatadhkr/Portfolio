export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-sky-600 mb-4">
          Experience
        </h2>

        <p className="text-center text-gray-500 mb-14">
          My internships and leadership journey
        </p>

        {/* TIMELINE WRAPPER */}
        <div className="relative border-l-2 border-sky-200 ml-4">

          {/* ITEM 1 */}
          <div className="mb-10 ml-6">

            {/* DOT */}
            <span className="absolute -left-[9px] mt-2 w-4 h-4 bg-sky-500 rounded-full"></span>

            <div className="bg-gray-50 border rounded-2xl p-6 hover:shadow-lg transition">

              <h3 className="text-xl font-semibold text-sky-600">
                Frontend Intern — Yeti Nepal
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Current
              </p>

              <p className="text-gray-600 mt-4 leading-7">
                Working on modern React applications, building reusable UI components,
                and improving responsive design and user experience.
              </p>

            </div>
          </div>

          {/* ITEM 2 */}
          <div className="mb-10 ml-6">

            <span className="absolute -left-[9px] mt-2 w-4 h-4 bg-sky-500 rounded-full"></span>

            <div className="bg-gray-50 border rounded-2xl p-6 hover:shadow-lg transition">

              <h3 className="text-xl font-semibold text-sky-600">
                UI/UX Intern — Fora
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Worked on wireframing, prototyping, user research,
                and improving product usability through design thinking.
              </p>

            </div>
          </div>

          {/* ITEM 3 */}
          <div className="ml-6">

            <span className="absolute -left-[9px] mt-2 w-4 h-4 bg-sky-500 rounded-full"></span>

            <div className="bg-gray-50 border rounded-2xl p-6 hover:shadow-lg transition">

              <h3 className="text-xl font-semibold text-sky-600">
                Volunteer Roles & Leadership
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Active member in GCES IT Club and Code for Change Pokhara.
                Organized events, facilitated workshops, and contributed to community tech learning.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}