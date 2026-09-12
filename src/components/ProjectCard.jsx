import React from "react";
import { GitBranch, Play, Globe } from "lucide-react";

const ProjectCard = ({
  image,
  title,
  subtitle,
  description,
  techStack,
  features,
  githubLink,
  appLink,
  websiteLink,
}) => {
    
  return (
    <div className="border border-gray-300 p-2 rounded-xl">

      {/* Image */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full max-h-64 object-cover rounded-2xl"
        />
      </div>

      {/* Description */}
      <div className="p-1">
        <p className="text-xl font-semibold">{title}</p>

        <p className="text-[14px] text-gray-700 pb-1 font-semibold">
          {subtitle}
        </p>

        <p className="text-[13px] text-gray-500">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center border border-gray-400 px-2 py-1 rounded-md"
            >
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-3 h-3 mr-1"
                />
              )}

              <span className="text-xs">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex gap-1 mt-3">
          <ul className="text-xs list-disc flex-1 ml-2 text-gray-700">
            {features?.slice(0, Math.ceil(features.length / 2)).map(
              (feature, index) => (
                <li key={index} className="m-1">
                  {feature}
                </li>
              )
            )}
          </ul>

          <ul className="text-xs list-disc flex-1 px-2 py-1 text-gray-700">
            {features?.slice(Math.ceil(features.length / 2)).map(
              (feature, index) => (
                <li key={index} className="m-1">
                  {feature}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Links */}
      <div className="w-full flex justify-between pt-2 pb-1">

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <GitBranch className="w-4 h-4" />
          <span className="text-[12px]">GitHub</span>
        </a>

        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <Play className="w-4 h-4" />
          <span className="text-[12px]">App</span>
        </a>

        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Globe className="w-4 h-4" />
          <span className="text-[12px]">Website</span>
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;