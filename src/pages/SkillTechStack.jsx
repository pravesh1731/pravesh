import React from 'react'
import { Cloud, Database, Globe, Smartphone, Wrench } from "lucide-react";
import { Heading, TechCard, TechHeading } from '../Common/Common';

const SkillTechStack = () => {
  return (
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

          <div className="flex justify-between flex-wrap gap-4">
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
          <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4 flex-1">
            {/* subheading with icon */}
            <div className="flex flex-row gap-3 pb-3 items-center">
              <div className=" p-2 border-2 border-gray-200 rounded-full">
                <Globe className="w-7 h-7" />
              </div>
              <div className="pt-4">
                <TechHeading title="Frontend Development" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-between">
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
          <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4 flex-1">
            {/* subheading with icon */}
            <div className="flex flex-row gap-3 pb-3 items-center">
              <div className=" p-2 border-2 border-gray-200 rounded-full">
                <Globe className="w-7 h-7" />
              </div>
              <div className="pt-4">
                <TechHeading title="Backend Development" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-between">
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
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
                title="Firebase"
              />
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex flex-row gap-4 ">
          {/* Database Icons */}
          <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4 flex-1">
            {/* subheading with icon */}
            <div className="flex flex-row gap-3 pb-3 items-center">
              <div className=" p-2 border-2 border-gray-200 rounded-full">
                <Database className="w-7 h-7" />
              </div>
              <div className="pt-4">
                <TechHeading title="Database" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-between">
              <TechCard
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                title="Mongo"
                title2="DB"
              />
              <TechCard
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                title="MySQL"
              />
              <TechCard
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                title="Postgre"
                title2="SQL"
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
          <div className="p-4 border-1 border-gray-200 rounded-3xl mb-4 flex-1">
            {/* subheading with icon */}
            <div className="flex flex-row gap-3 pb-3 items-center">
              <div className=" p-2 border-2 border-gray-200 rounded-full">
                <Cloud className="w-7 h-7" />
              </div>
              <div className="pt-4">
                <TechHeading title="Cloud & DevOps" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-between">
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

          <div className="flex flex-wrap gap-4 justify-between">
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
  )
}

export default SkillTechStack
