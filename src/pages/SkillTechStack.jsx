import { Cloud, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";
import { Heading, IconBadge, TechLogo, TechPill } from "../Common/Common";

// What I use most, shown first.
const coreStack = [
  {
    title: "Flutter & Dart",
    logos: ["Flutter", "Dart"],
    note: "Used in every role so far. Apps shipped to the Play Store and App Store.",
  },
  {
    title: "Kotlin & Compose",
    logos: ["Kotlin", "Jetpack Compose"],
    note: "Native Android apps, with Jetpack Compose for UI.",
  },
  {
    title: "Firebase",
    logos: ["Firebase"],
    note: "Auth, Firestore, and security rules in production apps.",
  },
  {
    title: "Node.js & Express",
    logos: ["Node.js", "Express"],
    note: "REST APIs and backends for my mobile apps, deployed on AWS.",
  },
];

const groups = [
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Dart", "Kotlin", "Swift", "Jetpack Compose", "XML", "Riverpod", "BLoC", "GetX"],
  },
  {
    title: "Frontend",
    icon: Globe,
    items: ["HTML", "Tailwind CSS", "React", "Next.js", "Redux"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "Firebase"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firestore", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Docker", "Jenkins", "Codemagic", "Ansible"],
  },
  {
    title: "Tools",
    icon: Wrench,
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

const SkillTechStack = () => {
  return (
    <section id="skills">
      <Heading
        title="Skills & Tech Stack"
        subtitle="What I use every day, and the rest of my toolbox."
      />

      {/* Core stack */}
      <div className="rounded-3xl bg-zinc-900 p-5 text-white sm:p-8">
        <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
          Core stack
        </p>
        <h3 className="mt-1.5 text-xl font-medium tracking-tight">
          What I build with most
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {coreStack.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/4 p-4 transition-colors duration-200 hover:border-white/25 hover:bg-white/7 sm:p-5"
            >
              <div className="flex -space-x-2">
                {item.logos.map((logo) => (
                  <div
                    key={logo}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-4 ring-zinc-900"
                  >
                    <TechLogo name={logo} className="h-6 w-6" />
                  </div>
                ))}
              </div>
              <p className="mt-4 font-medium">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-zinc-400">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full toolbox */}
      <div className="mt-4 divide-y divide-zinc-200 rounded-3xl border border-zinc-200">
        {groups.map((group) => (
          <div
            key={group.title}
            className="grid gap-4 p-5 sm:p-6 md:grid-cols-[190px_1fr] md:items-center"
          >
            <div className="flex items-center gap-3">
              <IconBadge icon={group.icon} />
              <h3 className="font-medium">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((name) => (
                <TechPill key={name} name={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillTechStack;
