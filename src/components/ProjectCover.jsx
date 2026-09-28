import { TechLogo } from "../Common/Common";
import { tech } from "../data/tech";

// Project thumbnail: the website screenshot when there is one, otherwise a
// dotted panel with the main tech logos. App screens live on the details page.
const ProjectCover = ({ project, number, className = "aspect-[2/1]" }) => {
  const { image, title, platforms, techStack } = project;

  if (image) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className} border border-zinc-200 bg-zinc-100`}>
        <img
          src={image}
          alt={`${title} website`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  const logos = techStack.filter((name) => tech[name]).slice(0, 4);

  return (
    <div className={`relative flex ${className} flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 bg-[radial-gradient(var(--color-zinc-300)_1px,transparent_1px)] bg-size-[18px_18px]`}>
      <span className="absolute top-3 left-4 font-mono text-5xl font-semibold tracking-tighter text-zinc-200 select-none">
        {number}
      </span>

      <div className="flex -space-x-2 transition-transform duration-300 group-hover:-translate-y-1">
        {logos.map((name) => (
          <div
            key={name}
            title={name}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm ring-4 ring-zinc-50"
          >
            <TechLogo name={name} className="h-6 w-6" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5 px-4">
        {platforms.map((platform) => (
          <span
            key={platform}
            className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-zinc-600"
          >
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCover;
