import { Check } from "lucide-react";
import { IconBadge, TechPill } from "../Common/Common";
import ResourceLinks from "./ResourceLinks";

const ProjectLinks = ({ links = [] }) => {
  if (links.length === 0) return null;

  return (
    <div className="mt-auto pt-6">
      <div className="border-t border-zinc-100 pt-4">
        <ResourceLinks links={links} />
      </div>
    </div>
  );
};

const Tag = ({ children, dark = false }) => (
  <span
    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
      dark ? "bg-zinc-900 text-white" : "border border-zinc-200 text-zinc-600"
    }`}
  >
    {children}
  </span>
);

const Screenshot = ({ image, title }) =>
  image ? (
    <img
      src={image}
      alt={`${title} screenshot`}
      loading="lazy"
      className="mb-6 aspect-video w-full rounded-xl border border-zinc-200 object-cover"
    />
  ) : null;

export const FeaturedProject = ({
  number,
  image,
  title,
  subtitle,
  tag,
  description,
  deliverables,
  features,
  techStack,
  links,
}) => {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-zinc-200 transition-colors duration-300 hover:border-zinc-400 md:grid-cols-[1.1fr_1fr]">
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs text-zinc-400">{number}</span>
          <Tag dark>Featured</Tag>
          {tag && <Tag>{tag}</Tag>}
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h3>
        <p className="mt-1 text-zinc-500">{subtitle}</p>
        <p className="mt-4 text-[15px] leading-7 text-zinc-600">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {techStack.map((name) => (
            <TechPill key={name} name={name} small />
          ))}
        </div>

        <ProjectLinks links={links} />
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50 p-6 sm:p-8 md:border-t-0 md:border-l">
        <Screenshot image={image} title={title} />

        <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
          What I shipped
        </p>
        <ul className="mt-4 grid gap-2.5">
          {deliverables.map(({ icon, label, detail }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3"
            >
              <IconBadge icon={icon} />
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-xs text-zinc-500">{detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-7 text-xs font-medium tracking-widest text-zinc-500 uppercase">
          Features
        </p>
        <ul className="mt-3 grid gap-x-4 sm:grid-cols-2 gap-y-2 text-sm text-zinc-700">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const ProjectCard = ({
  number,
  image,
  title,
  subtitle,
  tag,
  description,
  features,
  techStack,
  links,
  className = "",
}) => {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 transition duration-300 hover:border-zinc-400 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)] ${className}`}
    >
      <Screenshot image={image} title={title} />

      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-zinc-400">{number}</span>
        {tag && <Tag>{tag}</Tag>}
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm text-zinc-500">{subtitle}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>

      {features?.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-zinc-700">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-900" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {techStack.map((name) => (
          <TechPill key={name} name={name} small />
        ))}
      </div>

      <ProjectLinks links={links} />
    </article>
  );
};

export default ProjectCard;
