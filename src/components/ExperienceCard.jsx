import React from "react";


const ExperienceCard = ({ experience }) => {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] sm:p-7">

      {/* Card Header */}
      <div className="flex items-start gap-4">

        {/* Company Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-lg font-bold text-white">
          {experience.company.charAt(0)}
        </div>

        {/* Title */}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold tracking-tight text-zinc-950">
            {experience.role}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {experience.company}
          </p>

          <p className="mt-1 text-xs text-zinc-400">
            {experience.location}
          </p>
        </div>

        {/* Type */}
        <span className="hidden rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 sm:block">
          {experience.type}
        </span>
      </div>

      {/* Description */}
      <p className="mt-6 text-sm leading-7 text-zinc-600">
        {experience.description}
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-zinc-100" />

      {/* Content */}
      <div className="grid gap-7 lg:grid-cols-[1fr_240px]">

        {/* Responsibilities */}
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-900">
            Key Responsibilities
          </h4>

          <ul className="space-y-2.5">
            {experience.responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm leading-6 text-zinc-600"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="border-t border-zinc-100 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-900">
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-2">
            {experience.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors group-hover:bg-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}


export default ExperienceCard;