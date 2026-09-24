import { useState } from "react";
import { tech } from "../data/tech";

export const Heading = ({ title, subtitle }) => {
  return (
    <div className="pb-6">
      <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>}
    </div>
  );
};

export const Divider = () => {
  return <div className="my-14 h-px w-full bg-zinc-200 sm:my-16" />;
};

export const Card = ({ className = "", children }) => {
  return (
    <div className={`rounded-2xl border border-zinc-200 bg-white ${className}`}>
      {children}
    </div>
  );
};

export const IconBadge = ({ icon: Icon }) => {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200">
      <Icon className="h-5 w-5" />
    </div>
  );
};

// Logo for a technology from the shared map. Renders nothing if there's
// no logo or the image fails to load.
export const TechLogo = ({ name, className = "h-4 w-4" }) => {
  const [failed, setFailed] = useState(false);
  const { icon, Icon } = tech[name] || {};

  if (Icon) return <Icon className={`${className} shrink-0 text-zinc-800`} />;
  if (!icon || failed) return null;

  return (
    <img
      src={icon}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} shrink-0 object-contain`}
    />
  );
};

export const TechPill = ({ name, small = false }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors duration-200 hover:border-zinc-900 hover:text-zinc-950 ${
        small ? "gap-1.5 px-2.5 py-1 text-xs" : "gap-2 px-3 py-1.5 text-sm"
      }`}
    >
      <TechLogo name={name} className={small ? "h-3.5 w-3.5" : "h-4 w-4"} />
      {name}
    </span>
  );
};

