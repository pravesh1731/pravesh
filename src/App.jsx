import { useState } from "react";
import HeroImage from "./assets/Hero.png";
import Button from "./components/Button";
import ExperienceItem from "./components/ExperienceItem";
import { Divider, Heading, TechCard, TechHeading } from "./components/Common";
import { Cloud, Database, Globe, Smartphone, Wrench } from "lucide-react";

function App() {
  return (
    <>
      <section>
        <div className="flex flex-row items-center justify-center">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-[30vw] h-[30vw] max-w-[250px] max-h-[250px] rounded-full object-cover border-1 border-gray-200"
          />
          <div>
            <h1 className="text-4xl font-medium pl-12 pb-1">
              Pravesh Chaudhary
            </h1>
            <h1 className="text-3xl font-medium pl-12 pb-4">
              A Software Developer
            </h1>
            <p className="text-md pl-12 text-gray-600">
              I am a passionate software developer with hand on professional
              experience in building App and Web applications form scratch to
              production.
            </p>
            <div className="pl-12 pt-4">
              <div className="group flex items-center gap-2 cursor-pointer pt-2">
                <Button px="px-4" py="py-1" title="Contact Me" />
                <span className="pl-2"></span>

                <Button px="px-7" py="py-1" title="Resume" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

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
                . I primarily work with Flutter and Android, while also
                exploring React, Node.js, Firebase, and AWS.
              </span>
              <span className="inline-block pb-3">
                I’ve worked on everything from educational and travel platforms
                to e-commerce applications, gaining experience in turning ideas
                into production-ready products. I love solving challenging
                problems, experimenting with new technologies, and constantly
                improving the way I build.
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

      <Divider />

      <section>
        <Heading title="Skill & Tech Stack" />
         {/* App Icon */}
        <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4">
          {/* subheading with icon */}
          <div className="flex flex-row gap-3 pb-3 items-center">
            <div className=" p-2 border-2 border-gray-200 rounded-full">
              <Smartphone className="w-7 h-7" />
            </div>
            <div className="pt-4">
              <TechHeading title="Mobile Development" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
              title="Swift"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
              title="Kotlin"
            />  
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg"
              title="Jetpack"
              title2="Compose"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-plain.svg"
              title="XML"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
              title="Flutter"
            />
             <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"
              title="Dart"
            />
            <TechCard
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KHravF2hon_vonoQlB-wzkSz1YJLgxvE5HRgp0N1VTt07ABm3pYKqUs&s=10"
              title="Riverpod"
            />
            <TechCard
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedAa9M71svCrLsQoXOJ_H6o1S6bb25D1Kgu6UPw_QDl_Y5LaVuHnBBec&s=10"
              title="BLOC"
            />
            <TechCard
              icon="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/685d64d52cede9b72b632c07/logo-jpg-getx-1--1024x1024.jpg"
              title="GetX"
            />
          </div>
        </div>

        <div className="flex flex-row gap-4">
          {/* Frontend Icons */}
        <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4">
          {/* subheading with icon */}
          <div className="flex flex-row gap-3 pb-3 items-center">
            <div className=" p-2 border-2 border-gray-200 rounded-full">
              <Globe className="w-7 h-7" />
            </div>
            <div className="pt-4">
              <TechHeading title="Frontend Development" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              title="HTML"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              title="Tailwind"
              title2="CSS"
            />  
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              title="JavaScript"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
              title="ReactJS"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              title="NextJS"
            />
            <TechCard
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            title="Redux"
            />
            
          </div>
        </div>

        {/* Backend Icons */}
        <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4">
          {/* subheading with icon */}
          <div className="flex flex-row gap-3 pb-3 items-center">
            <div className=" p-2 border-2 border-gray-200 rounded-full">
              <Globe className="w-7 h-7" />
            </div>
            <div className="pt-4">
              <TechHeading title="Backend Development" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              title="NodeJS"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
              title="ExpressJS"
            />  
            <TechCard
              icon="https://thivalente.com.br/wp-content/uploads/2024/07/restApi.webp"
              title="REST API"
            />
            <TechCard
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbMfQ-O5Zr4oZ2Ln0oDvSxTawSBdrRJT-FeTaK1-whw&s=10" 
              title="WebSocket"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              title="Firebase"
            />
             
          </div>
        </div>
        </div>

        {/* section 3 */}
        <div className="flex flex-row gap-4 ">
          {/* Database Icons */}
        <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4">
          {/* subheading with icon */}
          <div className="flex flex-row gap-3 pb-3 items-center">
            <div className=" p-2 border-2 border-gray-200 rounded-full">
              <Database className="w-7 h-7" />
            </div>
            <div className="pt-4">
              <TechHeading title="Database"/>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              title="MongoDB"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
              title="MySQL"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              title="PostgreSQL"
            />  
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              title="Firestore"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
              title="DynamoDB"
            />
           
          </div>
        </div>

        {/* Cloud and DevOps Icons */}
        <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4">
          {/* subheading with icon */}
          <div className="flex flex-row gap-3 pb-3 items-center">
            <div className=" p-2 border-2 border-gray-200 rounded-full">
              <Cloud className="w-7 h-7" />
            </div>
            <div className="pt-4">
              <TechHeading title="Cloud & DevOps" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              title="AWS"
            />  
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
              title="Docker"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" 
              title="Jenkins"
            />
            <TechCard
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKJDu2F4ptD08lC1ZJQvsQe_nIYcNvoXs1ENQ76Gd-w&s"
              title="Codemagic"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg"
              title="Ansible"
            />
           
             
          </div>
        </div>
        </div>

         {/* Tools I user Icon */}
        <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4">
          {/* subheading with icon */}
          <div className="flex flex-row gap-3 pb-3 items-center">
            <div className=" p-2 border-2 border-gray-200 rounded-full">
              <Wrench className="w-7 h-7" />
            </div>
            <div className="pt-4">
              <TechHeading title="Tool I Used" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              title="VS Code"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              title="Git"
            />  
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              title="Github"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              title="Figma"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
              title="Android"
              title2="Studio"
            />
             <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
              title="Docker"
              title2="Desktop"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" 
              title="Cloudflare"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              title="EC2"
            />
            <TechCard
              icon="https://images.ctfassets.net/nrgyaltdicpt/2RrzN8eVNXo7w6kd7CBNrs/55d916a167fa65d94441cc215558182c/overleaf-logo-primary.jpg"
              title="OverLeaf"
            />
            <TechCard
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              title="Firebase"
              title2="Console"
            />
            <TechCard
              icon="https://images.seeklogo.com/logo-png/48/2/google-play-console-icon-logo-png_seeklogo-486878.png"
              title="Google Play"
              title2="Console"
            />
          
            <TechCard
              icon="https://developer.apple.com/assets/elements/icons/app-store-s/app-store-s-256x256_2x.png"
              title="Apple Store "
              title2="Connect"
            />

          </div>
        </div>
       
      </section>
    </>
  );
}

export default App;
