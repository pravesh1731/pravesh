import React from "react";
import { Heading, TechHeading } from "../Common/Common";
import image from "../assets/project.png";
import { CalendarHeart, GitBranch, Globe, Play } from "lucide-react";

const Projects = () => {
  const techStack = [
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
      name: "Bloc",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bloc/bloc-original.svg",
    },
    {
      name: "NodeJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },

    {
      name: "EC2",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "DynamoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ];

  return (
    <section>
      <Heading title="Projects" />
      <div className="border-1 border-gray-300 rounded-3xl p-4 flex w-full">
        {/* image */}
        <div className="w-full md:w-[30%] flex items-center justify-center">
          <img
            src={image}
            alt="Present-Me project"
            className="w-full h-48 md:h-full max-h-64 object-cover rounded-2xl"
          />
        </div>

        {/* description */}
        <div className="w-[50%] pl-4">
          <p className="text-lg font-semibold pt-0 mt-0">Present-Me</p>
          <p className="text-[14px] text-gray-700 pb-1 font-semibold">
            Attendance Management System
          </p>
          <p className="text-[13px] text-gray-500">
            A comprehensive attendance management system for eduction institions
            with automation, real-time tracking and role-based access
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => {
                return (
                  <div
                    className="flex items-center  border-1 border-gray-400 px-2 py-1 rounded-md"
                    key={tech.name}
                  >
                    {tech.icon && (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-3 h-3 mr-1"
                      />
                    )}
                    <spam className=" text-xs">{tech.name}</spam>
                  </div>
                );
              })}
          </div>

          <div className="flex gap-1 mt-3">
            <ul className="text-xs list-disc flex-1 ml-2 text-gray-700">
              <li className="m-1">Dual Login(Student/Teacher)</li>
              <li className="m-1"> Attendance(Hotspot/Manual)</li>
              <li className="m-1">Reports(PDF/EXCEL)</li>
            </ul>
            <ul className="list-disc px-2 py-1 rounded-full text-xs flex-1  text-gray-700">
              <li className="m-1">Notice Board, TimeTable</li>
              <li className="m-1">PYQ Access</li>
            </ul>
          </div>
        </div>

        <div className="border-l-1 border-gray-300" />

        {/* Links */}
        <div className="w-[20%] flex flex-col justify-evenly pl-4 ">
          <div className="flex flex-row gap-2">
            <CalendarHeart className="w-5 h-5" />
            <p className="text-[14px]">Aug 2025</p>
          </div>
          <div className="flex flex-row gap-2">
            <Play className="w-5 h-5" />
            <p className="text-[14px]">PlayStore Link</p>
          </div>
          <div className="flex flex-row gap-2">
            <Globe className="w-5 h-5" />
            <p className="text-[14px]">Website Link</p>
          </div>
          <div className="flex flex-row gap-2">
            <GitBranch className="w-5 h-5" />
            <p className="text-[14px]">GitHub Link</p>
          </div>
        </div>
      </div>

      
    </section>

    
  );
};

export default Projects;
