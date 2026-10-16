import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import ExperienceItem from "../components/ExperienceItem";
import { Card, Heading } from "../Common/Common";

const roles = [
  {
    title: "Software Developer",
    company: "Thaiseva",
    startDate: "Oct 2025",
    endDate: "Present",
  },
  {
    title: "Flutter Developer Intern",
    company: "Drixby Solutions Pvt. Ltd.",
    startDate: "Apr 2026",
    endDate: "May 2026",
  },
  {
    title: "Flutter Developer Intern",
    company: "Mindturf",
    startDate: "Dec 2025",
    endDate: "Jan 2026",
  },
  {
    title: "Application Developer",
    company: "Siyag Rural Market Pvt. Ltd.",
    startDate: "Sep 2025",
    endDate: "Oct 2025",
  },
];

const experienceBreakdown = [
  { value: "2+ Yrs", label: "Overall Exp" },
  { value: "2 Yrs", label: "Web Dev" },
  { value: "1.5 Yrs", label: "Flutter" },
  { value: "1 Yr", label: "iOS" },
  { value: "1 Yr", label: "Backend" },
  { value: "6 Mon", label: "DevOps" },
];

const highlights = [
  {
    icon: Rocket,
    title: "Store Releases",
    desc: "Shipped apps to Google Play Store & Apple App Store via TestFlight.",
  },
  {
    icon: Layers,
    title: "Full-Stack Mobile",
    desc: "Flutter, Android & iOS with Node.js, Firebase & AWS backends.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade",
    desc: "Integrated payments, hardened security, and sub-second load times.",
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    desc: "Collaborated with founders and teams across India & Thailand.",
  },
];

const AboutMe = () => {
  return (
    <section id="about">
      <Heading title="About Me" />

      <div className="grid gap-8 md:grid-cols-[1fr_310px] md:gap-10">
        {/* Left: Punchy bio + Experience Breakdown + 4 mini feature cards */}
        <div className="space-y-4">
          <p className="text-lg font-medium text-zinc-900 sm:text-xl">
            Software Developer building fast, polished mobile & web applications.
          </p>

          <p className="text-sm leading-6 text-zinc-600">
            With <span className="font-semibold text-zinc-900">2+ years of overall experience</span> across{" "}
            <span className="font-semibold text-zinc-900">7 roles & internships</span> in India and Thailand, I bridge mobile and web engineering from first prototype to production release. I specialize in cross-platform Flutter & native iOS apps, modern full-stack web platforms, and cloud infrastructure.
          </p>

          {/* Experience Breakdown Badges */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {experienceBreakdown.map(({ value, label }) => (
              <div
                key={label}
                className="group rounded-xl border border-zinc-200 bg-white p-2.5 text-center transition-all duration-200 hover:border-zinc-400 hover:shadow-xs"
              >
                <p className="text-sm font-semibold tracking-tight text-zinc-900 sm:text-base group-hover:text-zinc-950">
                  {value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium tracking-tight text-zinc-500 sm:text-[11px]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Feature Highlights */}
          <div className="grid gap-3 pt-1 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-3.5 transition-all duration-200 hover:border-zinc-400 hover:shadow-xs"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 transition-colors group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-900">{title}</p>
                  <p className="mt-0.5 text-xs text-zinc-500 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Compact snapshot card */}
        <div>
          <Card className="p-4.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-zinc-500" />
                <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  Where I’ve Worked
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>

            <div className="mt-4 space-y-3.5 border-l border-zinc-200 pl-3.5">
              {roles.map((role) => (
                <ExperienceItem key={role.company} {...role} />
              ))}
            </div>

            <div className="mt-4 border-t border-zinc-100 pt-3">
              <a
                href="#experience"
                className="group inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                <span>Explore all 7 roles & documents</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
