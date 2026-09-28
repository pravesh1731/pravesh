import { useState } from "react";
import { Globe, Server, Smartphone } from "lucide-react";
import { Heading, IconBadge, TechLogo } from "../Common/Common";
import { tech } from "../data/tech";

// Where I'm strongest, each with proof from real work. `primary` gets the
// dark badge; `logos` show as tiles, `keywords` as plain tags.
const expertise = [
  {
    title: "Mobile development",
    level: "Primary focus",
    primary: true,
    icon: Smartphone,
    proof: "Flutter in all 7 roles, with 5+ apps live on the Play Store and App Store.",
    logos: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Swift"],
    keywords: ["Riverpod", "BLoC", "GetX", "Payments", "TestFlight"],
  },
  {
    title: "Backend & cloud",
    level: "Used in production",
    icon: Server,
    proof: "REST APIs on Node.js and Express, Firebase auth and security rules, deployed on AWS.",
    logos: ["Node.js", "Express", "Firebase", "AWS", "DynamoDB"],
    keywords: ["REST APIs", "Firestore", "EC2", "Security rules"],
  },
  {
    title: "Web development",
    level: "Also build with",
    icon: Globe,
    proof: "Client sites and admin panels in React and Next.js, like Jasaen and the Thaiseva panels.",
    logos: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    keywords: ["Admin panels", "Redux", "Vercel"],
  },
];

const toolbox = [
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "Kotlin", "Swift", "Jetpack Compose", "XML", "Riverpod", "BLoC", "GetX"],
  },
  { title: "Frontend", items: ["HTML", "Tailwind CSS", "React", "Next.js", "Redux"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Firebase"] },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firestore", "DynamoDB"],
  },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Jenkins", "Codemagic", "Ansible"] },
  {
    title: "Tools",
    items: [
      "VS Code",
      "Android Studio",
      "Git",
      "GitHub",
      "Figma",
      "Cloudflare",
      "Firebase Console",
      "Play Console",
      "App Store Connect",
    ],
  },
];

const techCount = new Set(toolbox.flatMap((group) => group.items)).size;

// Logo, or a monogram for names without one, so tiles stay aligned.
const Mark = ({ name, size = "h-5 w-5" }) =>
  tech[name] ? (
    <TechLogo name={name} className={size} />
  ) : (
    <span
      className={`${size} flex shrink-0 items-center justify-center rounded-md bg-zinc-100 text-[10px] font-semibold text-zinc-500`}
    >
      {name.charAt(0)}
    </span>
  );

const ExpertiseCard = ({ title, level, primary, icon, proof, logos, keywords }) => (
  <div className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.25)] sm:p-6">
    <div className="flex items-center justify-between gap-3">
      <IconBadge icon={icon} />
      <span
        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
          primary ? "bg-zinc-900 text-white" : "border border-zinc-200 text-zinc-600"
        }`}
      >
        {level}
      </span>
    </div>

    <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
    <p className="mt-1.5 text-sm leading-6 text-zinc-600">{proof}</p>

    <div className="mt-5 flex flex-wrap gap-2">
      {logos.map((name) => (
        <span
          key={name}
          title={name}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white transition-transform duration-200 group-hover:-translate-y-0.5"
        >
          <Mark name={name} />
        </span>
      ))}
    </div>

    <p className="mt-auto pt-5 text-xs leading-5 text-zinc-500">
      <span className="font-medium text-zinc-700">{logos.join(" · ")}</span>
      <span className="text-zinc-300"> / </span>
      {keywords.join(" · ")}
    </p>
  </div>
);

const SkillTechStack = () => {
  const [active, setActive] = useState(0);
  const tab = toolbox[active];

  return (
    <section id="skills">
      <Heading
        title="Skills & Tech Stack"
        subtitle="Where I'm strongest, and everything else I work with."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {expertise.map((area) => (
          <ExpertiseCard key={area.title} {...area} />
        ))}
      </div>

      {/* Full toolbox, filterable by category */}
      <div className="mt-4 rounded-3xl border border-zinc-200 p-5 sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-semibold tracking-tight">Full toolbox</h3>
            <p className="text-sm text-zinc-500">
              {techCount} technologies across {toolbox.length} areas
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Skill categories"
            className="no-scrollbar -mx-5 flex gap-1.5 overflow-x-auto px-5 sm:-mx-6 sm:px-6 md:mx-0 md:flex-wrap md:justify-end md:px-0"
          >
            {toolbox.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="skills-panel"
                  onClick={() => setActive(index)}
                  className={`inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                    selected
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  {item.title}
                  <span className="text-zinc-400">
                    {item.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <ul
          key={tab.title}
          id="skills-panel"
          role="tabpanel"
          aria-label={tab.title}
          className="mt-5 grid animate-fade-in grid-cols-2 gap-2 motion-reduce:animate-none sm:grid-cols-3 lg:grid-cols-5"
        >
          {tab.items.map((name) => (
            <li
              key={name}
              className="flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-700 transition-colors duration-200 hover:border-zinc-400 hover:text-zinc-950"
            >
              <Mark name={name} />
              <span className="truncate">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillTechStack;
