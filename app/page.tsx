"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const texts = [
    "Namaste 🙏 Welcome to my little corner of the internet!",
    "I build impactful digital solutions 🚀",
    "AI • Full Stack • Creative Thinker 💡",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const words = texts[textIndex].split(" ");
    if (wordIndex < words.length) {
      const t = setTimeout(() => {
        setDisplayText((p) =>
          p ? p + " " + words[wordIndex] : words[wordIndex]
        );
        setWordIndex(wordIndex + 1);
      }, 350);
      return () => clearTimeout(t);
    } else {
      const pause = setTimeout(() => {
        setDisplayText("");
        setWordIndex(0);
        setTextIndex((p) => (p + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [wordIndex, textIndex]);

  useEffect(() => {
    const blink = setInterval(() => setCursor((p) => !p), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-purple-400">Anmol.aryan</h1>
          <div className="space-x-6 text-sm flex items-center">
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#skills" className="hover:text-purple-400">Skills</a>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
            <a
              href="/resume.pdf"
              download
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h2 className="text-5xl font-extrabold flex items-center gap-3">
              Heyya, I'm <span className="text-purple-400">Anmol</span> 👋
            </h2>

            <p className="mt-6 text-gray-300 text-lg min-h-[32px]">
              {displayText}
              <span className="text-purple-400 ml-1">
                {cursor ? "|" : " "}
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-pink-500 animate-float">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image src="/anmol.jpg" alt="Anmol" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard title="Programming" items={["C","C++","Python","SQL","HTML","CSS","JavaScript","React","MongoDB","MySQL"]} />
            <SkillCard title="Data & AI" items={["Machine Learning","Artificial Intelligence","Pandas","NumPy","Data Visualization"]} />
            <SkillCard title="Analytics Tools" items={["Excel","Power BI","Tableau"]} />
            <SkillCard title="Core Concepts" items={["DBMS","Software Development Lifecycle (SDLC)"]} />
            <SkillCard title="Developer Tools" items={["Git","GitHub","VS Code","Google Colab","Jupyter Notebook"]} />
            <SkillCard title="Soft Skills" items={["Problem Solving","Time Management","Multitasking","Creativity","Leadership"]} />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-14">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="Disease Detection in Plants"
              desc="Deep learning system using ResNet9 trained on 87,000+ plant images achieving 98.5% accuracy for early disease detection."
              link="https://github.com/anmol7361"
            />
            <ProjectCard
              title="E-Commerce Website"
              desc="Complete PHP & MySQL e-commerce platform with authentication, cart, admin dashboard, and order management."
              link="https://github.com/anmol7361"
            />
            <ProjectCard
              title="Commission Tracker"
              desc="Role-based commission tracking system with analytics, secure login, and automated reporting."
              link="https://github.com/anmol7361"
            />
          </div>
        </div>
      </section>

      {/* VISIT GITHUB */}
      <section className="py-16 bg-black text-center">
        <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">
          Curious about the code? Check out my GitHub for complete project implementations.
        </p>

        <a
          href="https://github.com/anmol7361"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-medium hover:scale-105 transition"
        >
          Visit My GitHub →
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-purple-400 mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a detail-oriented MCA student with strong hands-on experience in
            full-stack development, machine learning, and database management.
            Passionate about building scalable, efficient, and user-focused
            software solutions while continuously learning modern technologies.
          </p>
        </div>
      </section>

      {/* CONTACT — SCREENSHOT STYLE */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-purple-400 mb-10">
            Contact Me
          </h2>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 border border-white/10">
            <p className="text-gray-300 mb-8">
              Open to opportunities, collaborations, or a quick chat 👋
            </p>

            <div className="space-y-5 text-gray-300 text-left max-w-md mx-auto">
              <p>
                📧 Email:&nbsp;
                <a
                  href="mailto:anmol1412ak@gmail.com"
                  className="text-purple-400 hover:underline"
                >
                  anmol1412ak@gmail.com
                </a>
              </p>

              <p>
                📞 Phone:&nbsp;
                <a
                  href="tel:7361010137"
                  className="text-purple-400 hover:underline"
                >
                  +91 7361010137
                </a>
              </p>

              <p>
                💼 LinkedIn:&nbsp;
                <a
                  href="https://www.linkedin.com/in/anmol-kumar-360-kr?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  linkedin.com/in/anmol-kumar-360-kr
                </a>
              </p>

              <p>
                💻 GitHub:&nbsp;
                <a
                  href="https://github.com/anmol7361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  github.com/anmol7361
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2026 Anmol Kumar · Built with Next.js & Tailwind CSS
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="bg-black/80 rounded-2xl p-6 border border-white/10">
      <h3 className="text-purple-400 font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="px-4 py-2 rounded-full bg-slate-800 text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, link }) {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
      >
        View Project →
      </a>
    </div>
  );
}
