import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Section from "./components/Section";
import Button from "./components/Button";
import { motion } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="min-h-screen p-6 md:p-12 transition-colors duration-500">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Jatin Chauhan</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Sections with animations */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Section title="About Me">
            <p>
              I'm a BCA and MCA graduate from CU, Himachal Pradesh. A passionate
              developer with leadership skills. 10th from DAV Dehra, 12th from HAPS Hamirpur.
            </p>
          </Section>

          <Section title="Skills">
            <ul className="list-disc ml-6">
              <li>Python</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </Section>

          <Section title="Tools">
            <ul className="list-disc ml-6">
              <li>Git Bash</li>
              <li>Linux</li>
            </ul>
          </Section>

          <Section title="Education">
            <ul className="list-disc ml-6">
              <li>10th - DAV Dehra</li>
              <li>12th - HAPS Hamirpur</li>
              <li>Graduation - CU</li>
            </ul>
          </Section>

          <Section title="Projects">
            <div className="grid md:grid-cols-2 gap-4">
              {["Voice Assistant", "React Portfolio"].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 border backdrop-blur-xl bg-white/10 dark:bg-white/5 rounded-xl shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold">{project}</h3>
                  <p>{project === "Voice Assistant" ? "Python-based voice assistant with AI." : "This responsive portfolio with animations and dark mode."}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section title="Contact Me">
            <motion.form
              className="space-y-4 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
              />
              <Button>Send</Button>
            </motion.form>
          </Section>
        </motion.div>

        <footer className="mt-10 text-center text-sm">
          <p>
            Made with ❤️ by Jatin Chauhan |{" "}
            <a href="/resume.pdf" className="underline">
              View Resume
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
