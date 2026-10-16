import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Divider } from "./Common/Common";
import { GITHUB_URL, LEETCODE_URL, LINKEDIN_URL } from "./data/links";
import { projects } from "./data/projects";

import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import SkillTechStack from "./pages/SkillTechStack";
import ProjectApp from "./pages/ProjectApp";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";
import ProjectDetail from "./pages/ProjectDetail";
import AllProjects from "./pages/AllProjects";

const sections = [AboutMe, SkillTechStack, ProjectApp, Experience, ContactMe];

const socials = [
  { label: "GitHub", href: GITHUB_URL, icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: FaLinkedin },
  { label: "LeetCode", href: LEETCODE_URL, icon: SiLeetcode },
];

// Clean HTML5 path router:
// - "/projects/<slug>" shows a project's details page
// - "/projects" shows the dedicated all projects archive
// - "/" shows the home page (with smooth section anchors that never put # in the URL)
const useLocation = () => {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    // If user loaded with any # in the URL, clean it up immediately
    if (window.location.hash) {
      const rawHash = window.location.hash;
      if (rawHash.startsWith("#/")) {
        const cleanPath = rawHash.slice(1);
        window.history.replaceState(null, "", cleanPath);
      } else {
        const id = rawHash.slice(1);
        window.history.replaceState(null, "", window.location.pathname);
        if (id && id !== "top") {
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }, 60);
        }
      }
    }

    const onChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", onChange);

    // Global interceptor for all internal navigation & anchor links
    const onLinkClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      // Section scroll links (e.g. #projects, #about, #contact, /#projects)
      if (href.startsWith("#") || href.startsWith("/#")) {
        e.preventDefault();
        const id = href.replace(/^\/?#/, "");

        // Keep URL completely clean (never append #hash to address bar)
        if (window.location.pathname !== "/") {
          window.history.pushState(null, "", "/");
          onChange();
        } else if (window.location.hash) {
          window.history.replaceState(null, "", "/");
        }

        setTimeout(() => {
          if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }
        }, 30);
        return;
      }

      // Page routes (e.g. /projects, /projects/thaiseva, /)
      if (href.startsWith("/")) {
        e.preventDefault();
        if (window.location.pathname !== href) {
          window.history.pushState(null, "", href);
          onChange();
        }
      }
    };

    document.addEventListener("click", onLinkClick);

    return () => {
      window.removeEventListener("popstate", onChange);
      document.removeEventListener("click", onLinkClick);
    };
  }, []);

  return pathname;
};

function App() {
  const pathname = useLocation();
  const slug = pathname.match(/^\/projects\/([\w-]+)\/?$/)?.[1];
  const project = projects.find((p) => p.slug === slug);
  const isAllProjects =
    !project && (pathname === "/projects" || pathname === "/projects/" || pathname === "/all-projects");

  // Dedicated pages open at the top.
  useEffect(() => {
    if (project || isAllProjects) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [project, isAllProjects, pathname]);

  return (
    <div id="top">
      {/* Remount on page change so it re-observes the sections. */}
      <Navbar key={project ? "detail" : isAllProjects ? "all-projects" : "home"} />

      <main className="mx-auto w-full max-w-5xl px-5 pt-28 pb-16 sm:px-8 sm:pt-36 lg:px-10">
        {project ? (
          <ProjectDetail key={project.slug} project={project} />
        ) : isAllProjects ? (
          <AllProjects />
        ) : (
          <>
            <Hero />

            {sections.map((Section, index) => (
              <div key={index}>
                <Divider />
                <Reveal>
                  <Section />
                </Reveal>
              </div>
            ))}
          </>
        )}
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
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0 })}
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-zinc-700"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="pb-8 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Pravesh Chaudhary.
        </p>
      </footer>
    </div>
  );
}

export default App;
