import { SiAppstore, SiCodemagic, SiGetx, SiGoogleplay } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;

// Logo for each technology, by display name. `icon` is an image URL,
// `Icon` is a react-icons component. Names without an entry render as text.
export const tech = {
  Flutter: { icon: devicon("flutter/flutter-original") },
  Dart: { icon: devicon("dart/dart-original") },
  Kotlin: { icon: devicon("kotlin/kotlin-original") },
  Swift: { icon: devicon("swift/swift-original") },
  "Jetpack Compose": { icon: devicon("jetpackcompose/jetpackcompose-original") },
  XML: { icon: devicon("xml/xml-plain") },
  GetX: { Icon: SiGetx },

  HTML: { icon: devicon("html5/html5-original") },
  "Tailwind CSS": { icon: devicon("tailwindcss/tailwindcss-original") },
  React: { icon: devicon("react/react-original") },
  "Next.js": { icon: devicon("nextjs/nextjs-original") },
  Redux: { icon: devicon("redux/redux-original") },
  TypeScript: { icon: devicon("typescript/typescript-original") },

  "Node.js": { icon: devicon("nodejs/nodejs-original") },
  Express: { icon: devicon("express/express-original") },
  "REST APIs": { Icon: TbApi },
  Firebase: { icon: devicon("firebase/firebase-original") },

  MongoDB: { icon: devicon("mongodb/mongodb-original") },
  MySQL: { icon: devicon("mysql/mysql-original") },
  PostgreSQL: { icon: devicon("postgresql/postgresql-original") },
  Firestore: { icon: devicon("firebase/firebase-original") },
  DynamoDB: { icon: devicon("dynamodb/dynamodb-original") },

  AWS: { icon: devicon("amazonwebservices/amazonwebservices-original-wordmark") },
  "AWS EC2": { icon: devicon("amazonwebservices/amazonwebservices-original-wordmark") },
  Docker: { icon: devicon("docker/docker-original") },
  Jenkins: { icon: devicon("jenkins/jenkins-original") },
  Codemagic: { Icon: SiCodemagic },
  Ansible: { icon: devicon("ansible/ansible-original") },
  Vercel: { icon: devicon("vercel/vercel-original") },

  "VS Code": { icon: devicon("vscode/vscode-original") },
  "Android Studio": { icon: devicon("androidstudio/androidstudio-original") },
  Git: { icon: devicon("git/git-original") },
  GitHub: { icon: devicon("github/github-original") },
  Figma: { icon: devicon("figma/figma-original") },
  Cloudflare: { icon: devicon("cloudflare/cloudflare-original") },
  "Firebase Console": { icon: devicon("firebase/firebase-original") },
  "Play Console": { Icon: SiGoogleplay },
  "App Store Connect": { Icon: SiAppstore },
};
