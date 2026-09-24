import { Download, FileText, Globe, LayoutDashboard } from "lucide-react";
import { FaGithub, FaGooglePlay } from "react-icons/fa";

const icons = {
  github: FaGithub,
  website: Globe,
  play: FaGooglePlay,
  apk: Download,
  admin: LayoutDashboard,
  doc: FileText,
};

// A row of external links. `compact` renders small underlined text links
// (for offer letters / certificates), otherwise outlined pill buttons.
const ResourceLinks = ({ links, compact = false }) => {
  return (
    <div className={`flex flex-wrap ${compact ? "gap-x-4 gap-y-2" : "gap-2"}`}>
      {links.map(({ kind, label, href }) => {
        const Icon = icons[kind] || Globe;
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              compact
                ? "inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-900"
                : "inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
            }
          >
            <Icon className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
            {label}
          </a>
        );
      })}
    </div>
  );
};

export default ResourceLinks;
