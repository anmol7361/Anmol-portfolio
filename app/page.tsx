import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-purple-400">Anmol.aryan</h1>
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#skills" className="hover:text-purple-400">Skills</a>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

          <div>
            <h2 className="text-5xl font-extrabold">
              Heyya, I'm <span className="text-purple-400">Anmol 👋</span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl">
              Namaste 🙏 Welcome to my little corner of the internet!
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
              >
                View Projects
              </a>

              {/* ✅ Resume Download Button */}
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/anmol7361"
                target="_blank"
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full border-4 border-purple-500 overflow-hidden">
              <Image
                src="/anmol.jpg"
                alt="Anmol Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-purple-400 mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Detail-oriented MCA student with hands-on experience in full-stack
            development, machine learning, and database management, seeking a role
            to apply technical expertise in building scalable and efficient
            software solutions.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["Java", "Spring Boot", "React", "JavaScript", "HTML", "CSS"],
              ["Git", "GitHub", "VS Code"],
            ].map((group, i) => (
              <div
                key={i}
                className="bg-black rounded-xl p-6 border border-white/10"
              >
                <div className="flex flex-wrap gap-3">
                  {group.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Disease Detection in Plants Using Image",
                desc: "ML model with 98.5% accuracy using ResNet9 and 87,000+ images.",
              },
              {
                title: "E-Commerce Website",
                desc: "PHP & MySQL based e-commerce platform with auth, cart & CRUD.",
              },
              {
                title: "Commission Tracker",
                desc: "Web app for managing commissions with admin dashboard & charts.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-slate-900 rounded-xl p-6 border border-white/10 hover:border-purple-500 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-purple-400 mb-6">
            Contact Me
          </h2>

          <p className="text-gray-300 mb-8">
            I’m open to internships and full-time opportunities.
          </p>

          <div className="bg-black/40 rounded-xl p-8 space-y-3">
            <p>📧 <span className="text-purple-400">anmol1412ak@gmail.com</span></p>
            <p>📞 +91-7361010137</p>
            <p>🔗 linkedin.com/in/anmol-kumar-360-kr</p>
            <p>💻 github.com/anmol7361</p>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2026 Anmol Kumar · Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}