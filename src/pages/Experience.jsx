import React from "react";
import { ExpHead, Heading } from "../Common/Common";
import { BicepsFlexed, BriefcaseBusiness, CodeXml } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {

    const experiences = [
  {
    date: "30 June 2025",
    role: "App Developer",
    company: "ExpertMind Technology Ltd",
    location: "India",
    type: "Professional",
    description:
      "Developed and published a Flutter-based mobile application with a Node.js backend, improving application load time by 25%, reducing crash rates, and enhancing overall performance and user experience.",
    responsibilities: [
      "Developed and published Flutter mobile applications",
      "Built backend services using Node.js",
      "Improved application load time by 25%",
      "Reduced crashes and improved application performance",
      "Enhanced overall user experience and reliability",
    ],
    stack: ["Flutter", "Dart", "Node.js", "Express.js", "REST API"],
  },

  {
    date: "Aug 2025",
    role: "Software Development Engineer (SDE)",
    company: "Cehpoint",
    location: "India",
    type: "Professional",
    description:
      "Developed and deployed cross-platform Flutter and native Android applications, publishing production-ready apps on Google Play Store and Apple App Store.",
    responsibilities: [
      "Developed cross-platform Flutter applications",
      "Built native Android applications using Kotlin",
      "Published applications on Google Play Store",
      "Published applications on Apple App Store",
      "Collaborated with cross-functional teams",
    ],
    stack: ["Flutter", "Dart", "Kotlin", "Android", "Firebase"],
  },

  {
    date: "Sept 2025",
    role: "Application Developer",
    company: "Siyag Rural Market Pvt. Ltd.",
    location: "India",
    type: "Professional",
    description:
      "Developed, maintained, and deployed Flutter applications including Gotan Store, Digistall, and DigiRider while optimizing UI/UX and resolving production issues.",
    responsibilities: [
      "Developed and maintained Flutter applications",
      "Worked on Gotan Store, Digistall and DigiRider",
      "Optimized application UI/UX",
      "Resolved production bugs",
      "Contributed to Google Play Store releases",
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST API", "Git"],
  },

  {
    date: "Oct 2025",
    role: "Software Developer",
    company: "Intela Solution",
    location: "India",
    type: "Professional",
    description:
      "Enhanced Flutter UI, implemented iOS features, strengthened Firebase backend security, performed TestFlight testing, and supported production deployments.",
    responsibilities: [
      "Enhanced Flutter application UI",
      "Implemented iOS-specific features",
      "Improved Firebase backend security",
      "Performed TestFlight testing",
      "Supported Play Store deployments",
      "Supported App Store deployments",
    ],
    stack: ["Flutter", "Dart", "Firebase", "iOS", "TestFlight"],
  },

  {
    date: "Apr 2026",
    role: "Flutter Developer Intern",
    company: "Drixby Solutions Pvt. Ltd.",
    location: "India",
    type: "Internship",
    description:
      "Developed and maintained Flutter applications by integrating REST APIs, building responsive UI/UX, and collaborating with design and backend teams.",
    responsibilities: [
      "Developed Flutter application features",
      "Integrated REST APIs",
      "Built responsive UI/UX",
      "Collaborated with design teams",
      "Collaborated with backend teams",
      "Worked on scalable application solutions",
    ],
    stack: ["Flutter", "Dart", "REST API", "UI/UX", "Git"],
  },

  {
    date: "Nov 2026",
    role: "Flutter Developer Intern",
    company: "Mindturf",
    location: "India",
    type: "Internship",
    description:
      "Integrated secure payment gateways into Flutter applications and collaborated with native Android and iOS modules to improve functionality, performance, and platform compatibility.",
    responsibilities: [
      "Integrated secure payment gateways",
      "Worked with Flutter applications",
      "Collaborated with Android modules",
      "Collaborated with iOS modules",
      "Improved application performance",
      "Improved platform compatibility",
    ],
    stack: ["Flutter", "Dart", "Android", "iOS", "Payments"],
  },
];

const stats = [
  {
    value: "6+",
    label: "Roles & Internships",
    icon: "◈",
  },
  {
    value: "Flutter",
    label: "Primary Focus",
    icon: "⌘",
  },
  {
    value: "25%",
    label: "Load Time Improvement",
    icon: "↗",
  },
  {
    value: "iOS + Android",
    label: "Cross Platform",
    icon: "◇",
  },
];



  return (
    <>
    <section>
      <Heading title="Experience" />
      <div className="border-1 border-gray-300 p-4 rounded-xl justify-between flex flex-row gap-4">
          <ExpHead icon={BriefcaseBusiness} title="Years of Experience" count="2+"/>
          <div className="border-1 border-gray-300 rounded-lg "></div>

          <ExpHead icon={CodeXml} title="Project Delivered" count="10+" />
          <div className="border-1 border-gray-300 rounded-lg"></div>

          <ExpHead icon={BicepsFlexed} title="Commitments" count="100%" />
      </div>
    </section>

    <section>
        <div className="relative mt-4">

          {/* Timeline Line */}
          <div className="absolute bottom-8 left-[20px] top-8 w-px bg-zinc-200 md:left-[118px]" />

          {experiences.map((experience, index) => (
            <div
              key={`${experience.company}-${index}`}
              className="relative mb-10 grid grid-cols-[42px_1fr] gap-4 md:grid-cols-[100px_40px_1fr] md:gap-0"
            >

              {/* Date */}
              <div className="col-start-2 row-start-1 pb-3 md:col-start-1 md:row-start-1 md:pt-3">
                <span className="text-xs font-semibold text-zinc-600 sm:text-sm">
                  {experience.date}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="col-start-1 row-span-2 row-start-1 flex justify-center pt-1 pl-30 md:col-start-1 md:row-start-1">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <div className="h-3.5 w-3.5 rounded-full border-4 border-white bg-black outline outline-1 outline-black" />
                </div>
              </div>

              {/* Experience */}
              <div className="col-start-3">
                <ExperienceCard experience={experience} />
              </div>

            </div>
          ))}
        </div>
    </section>
    
    </>
  );
}

export default Experience;
