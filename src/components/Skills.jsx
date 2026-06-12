export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-sky-600 mb-4">
          Skills
        </h2>

        <p className="text-center text-gray-500 mb-12">
          A simple overview of my technical and professional skills
        </p>

        <div className="space-y-8">

          {/* TECHNICAL SKILLS */}
          <div className="bg-gray-50 border rounded-2xl p-6">

            <h3 className="text-sky-600 font-semibold text-lg mb-4">
              Technical Skills
            </h3>

            <p className="text-gray-600 leading-7">
              I have experience working with frontend and backend technologies to build responsive web applications.
              I use <span className="font-medium">React</span> for UI development, 
              <span className="font-medium"> JavaScript</span> for logic,
              and <span className="font-medium">Tailwind CSS</span> for styling modern interfaces.
              On the backend side, I work with <span className="font-medium">Node.js</span>,
              <span className="font-medium"> Express</span>, and <span className="font-medium">MongoDB</span> to build REST APIs and manage data.
            </p>

          </div>

          {/* TOOLS & WORKFLOW */}
          <div className="bg-gray-50 border rounded-2xl p-6">

            <h3 className="text-sky-600 font-semibold text-lg mb-4">
              Tools & Workflow
            </h3>

            <p className="text-gray-600 leading-7">
              I regularly use <span className="font-medium">Git & GitHub</span> for version control,
              and <span className="font-medium">Figma</span> for UI/UX design and prototyping.
              I follow a structured development workflow from designing interfaces to implementing and testing features.
            </p>

          </div>

          {/* SOFT SKILLS */}
          <div className="bg-gray-50 border rounded-2xl p-6">

            <h3 className="text-sky-600 font-semibold text-lg mb-4">
              Soft Skills
            </h3>

            <p className="text-gray-600 leading-7">
              I am a quick learner with strong problem-solving ability and attention to detail.
              I enjoy teamwork, communication, and adapting to new challenges while continuously improving my skills.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}