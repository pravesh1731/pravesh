import React from "react";
import { Heading } from "../Common/Common";
import image from "../assets/project.png";
import {  GitBranch, Globe, Play } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const ProjectApp = () => {
  const techStackPresentMe = [
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
  const techStackAgriDirect = [
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
   
    {
      name: "Riverpod",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/riverpod/riverpod-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    {
      name: "WebSocket",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    
  ];
  const techStackThaiseva = [
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
   
    {
      name: "Riverpod",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/riverpod/riverpod-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    
    
  ];
  const techStackJasaen = [
    {
      name: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Versal",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
  ];
   const featuresPresentMe = [
    "Dual Login(Student/Teacher)",
    "Attendance(Hotspot/Manual)",
    "Reports(PDF/EXCEL)",
    "Notice Board, TimeTable",
    "PYQ Access",
  ];
  const featuresAgriDirect = [
    "Direct Transaction between Farmers and Consumers",
    "Inventory Management",
    "Real-time Chat",
    "Secure and Transparent",
  ]
  const featuresAgriThaiseva = [
    "Sightseeing Packages",
    "Taxi & Vehicle Rentals",
    "Hotel Booking",
    "Food Ordering",
    "Real-time Chat",
    "Payment Integration",
  ]
  const featuresJasaen = [
    "Room Booking",
    "Room Management",
    "Admin Portal",
    "Cloudbed Integration",
    "Google Authentication",
  ]
  return (
    <section>
      <Heading title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       

        <ProjectCard
          image={image}
          title="Present-Me"
          subtitle="Attendance Management System"
          description="A comprehensive attendance management system for education institutions with automation, real-time tracking and role-based access."
          techStack={techStackPresentMe}
          features={featuresPresentMe}
          githubLink="https://github.com/"
          appLink="https://play.google.com/"
          websiteLink="https://example.com/"
        />


        <ProjectCard
          image={image}
          title="Thaiseva"
          subtitle="Tourism and Travel Platform"
          description="A Complete tour and travel platform for a Thailand-based client with booking, ordering, and rental services.It has flutter App, User Website, Admin Panel for Restureants Partners, & 2 Super Admin Panels"
          techStack={techStackThaiseva}
          features={featuresAgriThaiseva}
          githubLink="https://github.com/"
          appLink="https://play.google.com/"
          websiteLink="https://example.com/"
        />

        <ProjectCard
          image={image}
          title="AgriDirect"
          subtitle="Farmer-to-Consumer Marketplace"
          description="A App that connects farmers directly with consumers, eliminating intermediaries and ensuring fair prices for both parties."
          techStack={techStackAgriDirect}
          features={featuresAgriDirect}
          githubLink="https://github.com/"
          appLink="https://play.google.com/"
          websiteLink="https://example.com/"
        />

        <ProjectCard
          image={image}
          title="Jasaen"
          subtitle="Hotel Booking Platform"
          description="A Full-Stack hotel booking platform for a Thailand-based client with admin portal along with cloudbed integration."
          techStack={techStackJasaen}
          features={featuresJasaen}
          githubLink="https://github.com/"
          appLink="https://play.google.com/"
          websiteLink="https://example.com/"
        />



        



    
      </div>
    </section>
  );
};

export default ProjectApp;
