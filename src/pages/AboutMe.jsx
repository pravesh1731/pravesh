import {
  BriefcaseBusiness,
  Layers,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import ExperienceItem from "../components/ExperienceItem";
import { Card, Heading, IconBadge } from "../Common/Common";

const roles = [
  {
    title: "Software Developer",
    company: "Intela Solution",
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

// What an interviewer should take away, each backed by the experience below.
const strengths = [
  {
    icon: Rocket,
    title: "Idea to store release",
    detail: "Shipped apps to the Play Store and App Store, TestFlight included.",
  },
  {
    icon: Layers,
    title: "Full-stack when needed",
    detail: "Flutter apps with Node.js, Firebase and AWS backends, plus React admin panels.",
  },
  {
    icon: ShieldCheck,
    title: "Production-minded",
    detail: "Payments, Firebase security rules, crash and load-time fixes.",
  },
  {
    icon: Users,
    title: "Works with real clients",
    detail: "Delivered for teams in India and Thailand alongside design and backend.",
  },
];

const AboutMe = () => {
  return (
    <section id="about">
      <Heading title="About Me" />

      <div className="grid gap-10 md:grid-cols-[1fr_300px] md:gap-12">
        <div className="space-y-5 text-[15px] leading-7 text-zinc-600">
          <p className="text-xl leading-8 font-medium tracking-tight text-zinc-900 sm:text-2xl sm:leading-9">
            Hey, I’m Pravesh, a developer who enjoys building things that
            matter.
          </p>
          <p>
            I’ve worked across{" "}
            <span className="font-medium text-zinc-900">
              7 roles and internships
            </span>
            , building mobile, web and full-stack products for travel,
            education and e-commerce, with apps now live in the stores.
          </p>
          <p>
            I like hard problems, clean code, and getting a little better at
            the craft with every release.
          </p>

          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {strengths.map(({ icon, title, detail }) => (
              <li
                key={title}
                className="rounded-2xl border border-zinc-200 p-4 transition-colors duration-200 hover:border-zinc-400"
              >
                <IconBadge icon={icon} />
                <p className="mt-3 text-sm font-semibold text-zinc-900">{title}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-500">{detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <IconBadge icon={BriefcaseBusiness} />
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
                Where I’ve worked
              </p>
            </div>
            <div className="mt-5 space-y-4 border-l border-zinc-200 pl-4">
              {roles.map((role) => (
                <ExperienceItem key={role.company} {...role} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
