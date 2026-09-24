import ResourceLinks from "./ResourceLinks";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 transition-colors duration-200 hover:border-zinc-400 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-base font-semibold text-white">
          {experience.company.charAt(0)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-semibold tracking-tight">{experience.role}</h3>
            <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-500">
              {experience.type}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-zinc-500">
            {experience.company} · {experience.location}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-600">
        {experience.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {experience.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {experience.links?.length > 0 && (
        <div className="mt-5 border-t border-zinc-100 pt-4">
          <ResourceLinks links={experience.links} compact />
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
