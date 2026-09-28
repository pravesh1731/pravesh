import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronDown, ChevronRight } from "lucide-react";
import { TechLogo, TechPill } from "../Common/Common";
import ProjectCover from "../components/ProjectCover";
import { ProjectLinks } from "../components/ProjectCard";
import { projectPath, projects } from "../data/projects";

const SITE_TITLE = document.title;

const Section = ({ number, title, children }) => (
  <section className="border-t border-zinc-200 pt-8">
    <h2 className="flex items-baseline gap-3 text-xl font-medium tracking-tight">
      <span className="font-mono text-xs text-zinc-400">{number}</span>
      {title}
    </h2>
    <div className="mt-5">{children}</div>
  </section>
);

// Layers drawn left to right (top to bottom on mobile) with arrows between.
const Architecture = ({ layers }) => (
  <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
    {layers.map(({ layer, items }, index) => (
      <div key={layer} className="contents">
        {index > 0 && (
          <div className="flex justify-center text-zinc-400" aria-hidden>
            <ChevronDown className="h-5 w-5 md:hidden" />
            <ChevronRight className="hidden h-5 w-5 md:block" />
          </div>
        )}
        <div className="flex-1 self-stretch rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-[11px] font-medium tracking-widest text-zinc-500 uppercase">{layer}</p>
          <ul className="mt-3 space-y-1.5">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const GlanceRow = ({ label, children }) => (
  <div className="py-3.5 first:pt-0 last:pb-0">
    <dt className="text-[11px] font-medium tracking-widest text-zinc-500 uppercase">{label}</dt>
    <dd className="mt-1.5 text-sm text-zinc-800">{children}</dd>
  </div>
);

const ProjectDetail = ({ project }) => {
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const number = String(index + 1).padStart(2, "0");

  useEffect(() => {
    document.title = `${project.title} · ${SITE_TITLE}`;
    return () => {
      document.title = SITE_TITLE;
    };
  }, [project]);

  return (
    <article className="animate-fade-in motion-reduce:animate-none">
      <a
        href="#projects"
        className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        All projects
      </a>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-zinc-400">{number}</span>
          <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
            {project.category}
          </p>
          {project.tag && (
            <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-500">
              {project.tag}
            </span>
          )}
        </div>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">{project.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <ProjectLinks live={[...project.live, ...project.links]} github={project.github} />
        </div>
      </header>

      <div className="group mt-10">
        <ProjectCover project={project} number={number} className="aspect-[16/9] sm:aspect-[2/1]" />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_260px]">
        <div className="min-w-0 space-y-12">
          <Section number="01" title="Overview">
            <div className="space-y-4 text-[15px] leading-7 text-zinc-600">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Section>

          <Section number="02" title="Key features">
            <ul className="grid gap-x-6 gap-y-2.5 text-[15px] text-zinc-700 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-zinc-900" />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="03" title="Architecture">
            <Architecture layers={project.architecture} />
          </Section>

          <Section number="04" title="Tech stack">
            <ul className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200">
              {project.stackDetails.map(({ name, use }) => (
                <li key={name} className="grid grid-cols-[150px_1fr] items-center gap-4 px-4 py-3 sm:grid-cols-[200px_1fr]">
                  <span className="flex items-center gap-2.5 text-sm font-medium">
                    <TechLogo name={name} className="h-4.5 w-4.5" />
                    {name}
                  </span>
                  <span className="text-sm text-zinc-600">{use}</span>
                </li>
              ))}
            </ul>
          </Section>

          {project.screens.length > 0 && (
            <Section number="05" title="App screens">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.screens.map((screen, i) => (
                  <img
                    key={screen}
                    src={screen}
                    alt={`${project.title} app screen ${i + 1}`}
                    loading="lazy"
                    className="w-full rounded-2xl border border-zinc-200"
                  />
                ))}
              </div>
            </Section>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <dl className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 p-5">
            <GlanceRow label="Category">{project.category}</GlanceRow>
            <GlanceRow label="Type">{project.tag || "Personal project"}</GlanceRow>
            <GlanceRow label="What I built">
              <ul className="space-y-1">
                {project.platforms.map((platform) => (
                  <li key={platform}>{platform}</li>
                ))}
              </ul>
            </GlanceRow>
            <GlanceRow label="Stack">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((name) => (
                  <TechPill key={name} name={name} small />
                ))}
              </div>
            </GlanceRow>
          </dl>
        </aside>
      </div>

      <a
        href={projectPath(next.slug)}
        className="group mt-16 flex items-center justify-between gap-4 rounded-3xl border border-zinc-200 p-6 transition-colors duration-200 hover:border-zinc-900 sm:p-8"
      >
        <div>
          <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">Next project</p>
          <p className="mt-1.5 text-2xl font-medium tracking-tight">{next.title}</p>
          <p className="text-sm text-zinc-500">{next.category}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-transform duration-200 group-hover:translate-x-1">
          <ArrowRight className="h-5 w-5" />
        </span>
      </a>
    </article>
  );
};

export default ProjectDetail;
