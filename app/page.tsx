export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <img
          src="/anmol.jpg"
          alt="Anmol Kumar"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold">Anmol Kumar</h1>
        <h2 className="text-blue-400 text-xl mt-2">Java Full Stack Developer</h2>

        <p className="max-w-2xl mt-4 text-gray-300">
          Java Full Stack Developer with experience in building scalable web
          applications using Java, Spring Boot, React, REST APIs, and relational
          databases.
        </p>

        <div className="flex gap-6 mt-6">
          <a
            href="https://github.com/anmol7361"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anmol-kumar-360-kr/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300">
          I am a Java Full Stack Developer passionate about backend development,
          RESTful APIs, and building clean, maintainable applications. I enjoy
          working with Spring Boot, databases, and modern frontend technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Java",
            "Spring Boot",
            "Hibernate",
            "REST APIs",
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border border-blue-500 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Student Management System</h3>
            <p className="text-gray-300 mt-2">
              Java + Spring Boot based CRUD application with MySQL database.
            </p>
          </div>

          <div className="border border-slate-700 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">REST API Backend</h3>
            <p className="text-gray-300 mt-2">
              Secure REST APIs built using Spring Boot and JWT authentication.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-400">
        © 2026 Anmol Kumar | Java Full Stack Developer
      </footer>
    </main>
  );
}