import { ArrowRight } from "lucide-react";
import { Heading } from "../Common/Common";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const FEATURED_COUNT = 4;

const ProjectApp = () => {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section id="projects">
      <Heading
        title="Projects"
        subtitle="Client platforms and production apps. Open any project for the full breakdown."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            number={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-sm"
        >
          More Projects
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default ProjectApp;
