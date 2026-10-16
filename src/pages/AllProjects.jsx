import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Search } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Heading } from "../Common/Common";
import ProjectCard from "../components/ProjectCard";
import { GITHUB_URL } from "../data/links";
import { projects } from "../data/projects";

const categories = ["All", "Mobile Apps", "Web & Full-Stack"];

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All"
        ? true
        : activeCategory === "Mobile Apps"
        ? project.category.toLowerCase().includes("mobile") ||
          project.platforms.some((p) => p.toLowerCase().includes("flutter") || p.toLowerCase().includes("android") || p.toLowerCase().includes("ios"))
        : activeCategory === "Web & Full-Stack"
        ? project.category.toLowerCase().includes("web") ||
          project.techStack.some((t) => ["React", "Next.js", "TypeScript"].includes(t))
        : true;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.summary.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.techStack.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fade-in motion-reduce:animate-none">
      {/* Back to Home Button */}
      <a
        href="/#projects"
        className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Back to Home
      </a>

      <div className="mt-8">
        <Heading
          title="All Projects"
          subtitle={`A complete archive of ${projects.length} mobile applications, web platforms, and client systems I’ve architected and delivered.`}
        />
      </div>

      {/* Filter and Search Controls */}
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              {cat}
              {cat === "All" && ` (${projects.length})`}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-zinc-200 bg-white py-1.5 pr-3 pl-8 text-xs text-zinc-800 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-900"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-zinc-200 p-8 text-center text-sm text-zinc-500">
          No projects match your filter criteria. Try resetting the search or category.
        </div>
      )}

      {/* GitHub Callout at Bottom */}
      <div className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-center sm:p-8">
        <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
          Looking for more repositories and experiments?
        </h3>
        <p className="mt-1 text-sm text-zinc-500">
          Explore open-source contributions, algorithms, and experiments on my GitHub.
        </p>
        <div className="mt-5 flex justify-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-800 transition-colors duration-200 hover:border-zinc-900"
          >
            <FaGithub className="h-4 w-4" />
            More on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
