import React from "react";
import ExperienceItem from "../components/ExperienceItem";
import { Heading } from "../Common/Common";

const AboutMe = () => {
  return (
    <section>
      <div className="flex w-full">
        {/* left side */}
        <div className="w-[75%] pr-17">
          <Heading title="About Me" />
          <p className="text-gray-500 text-[14px]">
            <span className="text-gray-900 text-[15px] font-medium">
              Hey, I’m Pravesh a developer who enjoys building things that
              matter.
            </span>
            <br />
            <span className="inline-block pt-3 pb-3">
              I’m an IT student and software developer with a passion for
              creating{" "}
              <span className="text-gray-900 font-semibold">
                mobile, web, and full-stack applications
              </span>
              . I primarily work with Flutter and Android, while also exploring
              React, Node.js, Firebase, and AWS.
            </span>
            <span className="inline-block pb-3">
              I’ve worked on everything from educational and travel platforms to
              e-commerce applications, gaining experience in turning ideas into
              production-ready products. I love solving challenging problems,
              experimenting with new technologies, and constantly improving the
              way I build.
            </span>
            <span className="text-gray-900 text-[15px] font-medium">
              I don’t just want to build software. I want to build experiences
              that people remember.
            </span>
          </p>
        </div>

        {/* right side */}
        <div className="w-[25%]">
          <h4 className="text-lg font-medium pb-5">Past Experience</h4>
          <div className="space-y-4">
            <ExperienceItem
              title="Software Developer"
              company="Intela Solution."
              startDate="Oct 2025"
              endDate="Present"
            />

            <ExperienceItem
              title="Flutter Developer Intern"
              company="Mindturf."
              startDate="Dec 2025"
              endDate="Jan 2026"
            />

            <ExperienceItem
              title="Flutter Developer Intern"
              company="Drixby Solutions Pvt. Ltd."
              startDate="Apr 2026"
              endDate="May 2026"
            />

            <ExperienceItem
              title="Application Developer"
              company="Siyag Rural Market Pvt. Ltd."
              startDate="Sept 2025"
              endDate="Oct 2025"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
