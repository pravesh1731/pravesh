import { BriefcaseBusiness, GraduationCap } from "lucide-react";
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
            I’m an IT student and software developer who builds{" "}
            <span className="font-medium text-zinc-900">
              mobile, web, and full-stack applications
            </span>
            . I mostly work with Flutter and Android, and I’m also using
            React, Node.js, Firebase, and AWS more and more.
          </p>
          <p>
            I’ve worked on everything from educational and travel platforms
            to e-commerce apps, taking ideas all the way to production. I like
            hard problems, trying out new tools, and getting a little better
            at the craft with every project.
          </p>
          <p className="border-l-2 border-zinc-900 pl-4 font-medium text-zinc-900">
            I don’t just want to build software. I want to build experiences
            people remember.
          </p>
        </div>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <IconBadge icon={GraduationCap} />
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
                Education
              </p>
            </div>
            <p className="mt-4 font-semibold">B.Tech, Information Technology</p>
            <p className="text-sm text-zinc-600">
              Guru Ghasidas Vishwavidyalaya, Bilaspur
            </p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-zinc-400">2023 — Present</span>
              <span className="rounded-full bg-zinc-900 px-2.5 py-1 font-medium text-white">
                CGPA 8.9
              </span>
            </div>
          </Card>

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
