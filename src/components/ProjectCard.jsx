import { ArrowRight, Check, Download, Globe, LayoutDashboard, Lock } from "lucide-react";
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import { TechPill } from "../Common/Common";
import { projectPath } from "../data/projects";
import ProjectCover from "./ProjectCover";

const linkIcons = { website: Globe, play: FaGooglePlay, apk: Download, admin: LayoutDashboard };

const pillClass =
  "inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white";

// Live links, then GitHub (or a "Private code" note for client work).
export const ProjectLinks = ({ live, github }) => (
  <>
    {live.map(({ kind, label, href }) => {
      const Icon = linkIcons[kind] || Globe;
      return (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={pillClass}>
          <Icon className="h-3.5 w-3.5" />
          {label}
        </a>
      );
    })}
    {github ? (
      <a href={github} target="_blank" rel="noopener noreferrer" className={pillClass}>
        <FaGithub className="h-3.5 w-3.5" />
        GitHub
      </a>
    ) : (
      <span
        title="Client project, source code is private"
        className="inline-flex items-center gap-1.5 px-1 py-1.5 text-xs text-zinc-400"
      >
        <Lock className="h-3.5 w-3.5" />
        Private
      </span>
    )}
  </>
);

const ProjectCard = ({ project, number }) => {
  const { slug, category, title, tag, summary, highlights, techStack, live, github } = project;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-3 transition duration-300 hover:border-zinc-400 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)]">
      <a href={projectPath(slug)} aria-label={`${title} details`} tabIndex={-1}>
        <ProjectCover project={project} number={number} />
      </a>

      <div className="flex flex-1 flex-col px-2 pt-4 pb-2 sm:px-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">{category}</p>
          {tag && (
            <span className="shrink-0 rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-500">
              {tag}
            </span>
          )}
        </div>

        <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
          <a href={projectPath(slug)} className="hover:underline hover:decoration-zinc-300 hover:underline-offset-4">
            {title}
          </a>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-zinc-600">{summary}</p>

        <ul className="mt-4 grid gap-x-4 gap-y-1.5 text-sm text-zinc-700 sm:grid-cols-2">
          {highlights.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {techStack.map((name) => (
            <TechPill key={name} name={name} small />
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap items-center gap-1.5 border-t border-zinc-100 pt-4">
            <ProjectLinks live={live} github={github} />
            <a
              href={projectPath(slug)}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-zinc-700"
            >
              Details
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
