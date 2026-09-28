import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Heading } from "../Common/Common";
import ProjectCard from "../components/ProjectCard";
import { GITHUB_URL } from "../data/links";
import { projects } from "../data/projects";

const ProjectApp = () => {
  return (
    <section id="projects">
      <Heading
        title="Projects"
        subtitle="Client platforms and my own builds. Open any project for the full breakdown."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            number={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors duration-200 hover:border-zinc-900"
        >
          <FaGithub className="h-4 w-4" />
          More on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
};

export default ProjectApp;
