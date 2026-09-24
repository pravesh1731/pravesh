import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Divider } from "./Common/Common";
import { GITHUB_URL, LEETCODE_URL, LINKEDIN_URL } from "./data/links";

import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import SkillTechStack from "./pages/SkillTechStack";
import ProjectApp from "./pages/ProjectApp";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";

const sections = [AboutMe, SkillTechStack, ProjectApp, Experience, ContactMe];

const socials = [
  { label: "GitHub", href: GITHUB_URL, icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: FaLinkedin },
  { label: "LeetCode", href: LEETCODE_URL, icon: SiLeetcode },
];

function App() {
  return (
    <div id="top">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-5 pt-28 pb-16 sm:px-8 sm:pt-36 lg:px-10">
        <Hero />

        {sections.map((Section, index) => (
          <div key={index}>
            <Divider />
            <Reveal>
              <Section />
            </Reveal>
          </div>
        ))}
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <p className="font-semibold tracking-tight">Pravesh Chaudhary</p>
            <p className="mt-1 text-sm text-zinc-500">
              Software Developer · Flutter, Android & Web
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-900"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-zinc-700"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="pb-8 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Pravesh Chaudhary. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
