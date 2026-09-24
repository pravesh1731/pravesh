import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Heading } from "../Common/Common";
import ExperienceCard from "../components/ExperienceCard";

// How many roles to show before "Show more".
const INITIAL_COUNT = 4;

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
    description:
      "Worked on the Thaiseva app: improved the Flutter UI, built iOS-specific features, and tightened Firebase security. Handled TestFlight testing and shipped releases to both the Play Store and App Store.",
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
    description:
      "Built Flutter features for the Wooziee app: integrated REST APIs, implemented responsive screens from designs, and worked closely with the design and backend teams.",
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
    description:
      "Contract work on the Thaiseva platform: performance optimisation, UI/UX improvements, and payment integration to get the app ready for the Play Store and App Store.",
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
    description:
      "Integrated secure payment gateways into Flutter apps and worked with the native Android and iOS modules to improve performance and platform compatibility.",
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
    description:
      "Developed and maintained three production Flutter apps (Gotan Store, Digistall, and DigiRider), polishing the UI/UX, fixing production bugs, and contributing to Play Store releases.",
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
    description:
      "Built cross-platform Flutter apps and native Android apps in Kotlin, and published production builds to the Google Play Store and Apple App Store.",
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
    description:
      "Built and published a Flutter app with a Node.js backend. Cut load time by 25% and reduced crash rates.",
    stack: ["Flutter", "Dart", "Node.js", "Express.js", "REST API"],
    links: [
      { kind: "doc", label: "Completion certificate", href: drive("1ZpBXCHWLQxUvuvv86pNv6OZMbFMkqEAQ") },
    ],
  },
];

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? experiences : experiences.slice(0, INITIAL_COUNT);
  const hiddenCount = experiences.length - INITIAL_COUNT;

  return (
    <section id="experience">
      <Heading
        title="Experience"
        subtitle="From internships to full-time work, mostly shipping Flutter apps to production."
      />

      <ol className="relative border-l border-zinc-200 md:ml-44">
        {visible.map((experience, index) => (
          <li key={experience.company} className="relative pb-8 pl-6 last:pb-0 md:pl-8">
            <span
              className={`absolute top-2 -left-1.25 h-2.5 w-2.5 rounded-full ring-4 ring-white ${
                index === 0 ? "bg-emerald-500" : "bg-zinc-900"
              }`}
            />
            <p className="mb-2 text-xs font-medium text-zinc-500 md:absolute md:top-1.5 md:-left-44 md:mb-0 md:w-36 md:text-right">
              {experience.period}
            </p>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ol>

      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center md:ml-44">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors duration-200 hover:border-zinc-900"
          >
            {showAll ? "Show less" : `Show ${hiddenCount} earlier roles`}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Experience;
