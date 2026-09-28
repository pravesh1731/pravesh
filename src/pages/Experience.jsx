import { useRef, useState } from "react";
import { Heading, TechPill } from "../Common/Common";
import ResourceLinks from "../components/ResourceLinks";

const drive = (id) => `https://drive.google.com/file/d/${id}/view`;
const playStore = (id) => `https://play.google.com/store/apps/details?id=${id}`;

// Most recent first. Links (offer letters, certificates, live apps) come
// from the resume.
const experiences = [
  {
    period: "Oct 2025 — Present",
    role: "Software Developer",
    company: "Intela Solution",
    location: "Thailand",
    type: "Professional",
    highlights: [
      "Improved the Flutter UI of the Thaiseva app and built iOS-specific features",
      "Hardened Firebase security rules",
      "Ran TestFlight testing and shipped releases to the Play Store and App Store",
    ],
    stack: ["Flutter", "Dart", "Firebase", "iOS", "TestFlight"],
    links: [
      { kind: "doc", label: "Offer letter", href: drive("131qLVmgtAq1w86RnQe9-HG5hL0fOqHpo") },
    ],
  },
  {
    period: "Apr 2026 — May 2026",
    role: "Flutter Developer Intern",
    company: "Drixby Solutions Pvt. Ltd.",
    location: "India",
    type: "Internship",
    highlights: [
      "Built Flutter features for the Wooziee app, live on the Play Store",
      "Integrated REST APIs and turned designs into responsive screens",
      "Worked day-to-day with the design and backend teams",
    ],
    stack: ["Flutter", "Dart", "REST API", "UI/UX", "Git"],
    links: [
      { kind: "play", label: "Wooziee app", href: playStore("com.wooziee.androidapp") },
      { kind: "doc", label: "Offer letter", href: drive("18BoGvBIUMVxU9joQh3jxuJEIk3VFEryY") },
    ],
  },
  {
    period: "Feb 2026",
    role: "Contract Developer",
    company: "Thaiseva",
    location: "Thailand",
    type: "Contract",
    highlights: [
      "Optimised performance and polished UI/UX across the Thaiseva platform",
      "Integrated payments to get the app store-ready",
    ],
    stack: ["Flutter", "Riverpod", "Firebase", "Payments"],
    links: [
      { kind: "admin", label: "Admin portal", href: "https://gothai-admin.web.app/login" },
      { kind: "doc", label: "Signed MOU", href: drive("1fQei1W3ftVZMbE2T4kojCpOKVq5uVLkt") },
    ],
  },
  {
    period: "Dec 2025 — Jan 2026",
    role: "Flutter Developer Intern",
    company: "Mindturf",
    location: "India",
    type: "Internship",
    highlights: [
      "Integrated secure payment gateways into Flutter apps",
      "Worked in native Android and iOS modules to improve performance and compatibility",
    ],
    stack: ["Flutter", "Dart", "Android", "iOS", "Payments"],
    links: [
      { kind: "play", label: "App on Play Store", href: playStore("com.vaky.aio") },
      { kind: "doc", label: "Offer letter", href: drive("1qzSxDyaIzUxjwiQt_0_7fw_yHCe3E7so") },
    ],
  },
  {
    period: "Sep 2025 — Oct 2025",
    role: "Application Developer",
    company: "Siyag Rural Market Pvt. Ltd.",
    location: "India",
    type: "Professional",
    highlights: [
      "Maintained 3 production Flutter apps: Gotan Store, Digistall and DigiRider",
      "Polished UI/UX and fixed production bugs",
      "Contributed to Play Store releases",
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST API", "Git"],
    links: [
      { kind: "play", label: "Gotan Store", href: playStore("com.digistall.gotan") },
      { kind: "play", label: "Digistall", href: playStore("com.digistall.digistall") },
      { kind: "play", label: "DigiRider", href: playStore("com.digistall.rider") },
      { kind: "website", label: "gotan.in", href: "https://gotan.in/" },
      { kind: "doc", label: "Offer letter", href: drive("1mzu3dITq8lHyqS5w3Kqjhh4s-uQOiuEI") },
      { kind: "doc", label: "Completion certificate", href: drive("1k3tnXYexp3Dm_VK_AwanO2Ynt6ZCYf2q") },
    ],
  },
  {
    period: "Aug 2025",
    role: "Software Development Engineer",
    company: "Cehpoint",
    location: "India",
    type: "Professional",
    highlights: [
      "Built cross-platform Flutter apps and native Android apps in Kotlin",
      "Published production builds to the Play Store and App Store",
    ],
    stack: ["Flutter", "Dart", "Kotlin", "Android", "Firebase"],
    links: [
      { kind: "doc", label: "Offer letter", href: drive("1osHUMDuutCw-fUDaAunBaKHdr87Xlk6j") },
    ],
  },
  {
    period: "Jun 2025",
    role: "App Developer",
    company: "ExpertMind Technology Ltd",
    location: "India",
    type: "Professional",
    highlights: [
      "Built and published a Flutter app with a Node.js backend",
      "Cut load time by 25% and reduced crash rates",
    ],
    stack: ["Flutter", "Dart", "Node.js", "Express.js", "REST API"],
    links: [
      { kind: "doc", label: "Completion certificate", href: drive("1ZpBXCHWLQxUvuvv86pNv6OZMbFMkqEAQ") },
    ],
  },
];

// A company list on the left (swipeable chips on mobile) and the
// selected role's details on the right. Arrow keys move between roles.
const Experience = () => {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const job = experiences[active];

  const select = (index) => {
    setActive(index);
    tabs.current[index]?.focus();
    tabs.current[index]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  const onKeyDown = (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (e.key === "Home") select(0);
    else if (e.key === "End") select(experiences.length - 1);
    else if (step) select((active + step + experiences.length) % experiences.length);
    else return;
    e.preventDefault();
  };

  return (
    <section id="experience">
      <Heading
        title="Experience"
        subtitle={`${experiences.length} roles, from internships to full-time work, mostly shipping Flutter apps to production.`}
      />

      <div className="grid gap-4 md:grid-cols-[230px_1fr] md:gap-6">
        <div
          role="tablist"
          aria-label="Companies"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-8 sm:px-8 md:mx-0 md:flex-col md:gap-1 md:overflow-visible md:border-l md:border-zinc-200 md:px-0"
        >
          {experiences.map((exp, index) => {
            const selected = index === active;
            return (
              <button
                key={exp.company}
                ref={(el) => (tabs.current[index] = el)}
                type="button"
                role="tab"
                id={`exp-tab-${index}`}
                aria-selected={selected}
                aria-controls="exp-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={`relative shrink-0 cursor-pointer rounded-xl border px-4 py-2.5 text-left transition-colors duration-200 md:-ml-px md:rounded-none md:rounded-r-xl md:border-0 md:border-l-2 md:py-3 ${
                  selected
                    ? "border-zinc-900 bg-zinc-100 md:border-zinc-900"
                    : "border-zinc-200 hover:bg-zinc-50 md:border-transparent"
                }`}
              >
                <span
                  className={`flex items-center gap-2 text-sm font-medium ${
                    selected ? "text-zinc-900" : "text-zinc-500"
                  }`}
                >
                  {exp.company}
                  {index === 0 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-label="current" />
                  )}
                </span>
                <span className="mt-0.5 block text-xs whitespace-nowrap text-zinc-400">
                  {exp.period}
                </span>
              </button>
            );
          })}
        </div>

        <div
          key={active}
          role="tabpanel"
          id="exp-panel"
          aria-labelledby={`exp-tab-${active}`}
          className="animate-fade-in rounded-3xl border border-zinc-200 bg-white p-6 motion-reduce:animate-none sm:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-lg font-semibold text-white">
                {job.company.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-0.5 text-sm text-zinc-500">
                  {job.company} · {job.location}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              {active === 0 && (
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                  Current
                </span>
              )}
              <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-zinc-600">
                {job.type}
              </span>
              <span className="font-mono text-zinc-400">
                {String(active + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <p className="mt-6 text-xs font-medium tracking-widest text-zinc-500 uppercase">
            {job.period}
          </p>
          <ul className="mt-3 space-y-2.5 text-[15px] leading-7 text-zinc-600">
            {job.highlights.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-3 h-1 w-3 shrink-0 rounded-full bg-zinc-300" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {job.stack.map((name) => (
              <TechPill key={name} name={name} small />
            ))}
          </div>

          {job.links?.length > 0 && (
            <div className="mt-6 border-t border-zinc-100 pt-5">
              <ResourceLinks links={job.links} compact />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
