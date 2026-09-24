import { ArrowUpRight, Globe, ShieldCheck, Smartphone, Store } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Heading } from "../Common/Common";
import ProjectCard, { FeaturedProject } from "../components/ProjectCard";
import { GITHUB_URL } from "../data/links";

// Links come from the resume; `kind` picks the icon (see ResourceLinks).
// `image` is optional: import a screenshot from ../assets to show one.
const featured = {
  title: "Thaiseva",
  subtitle: "Tourism & Travel Platform",
  tag: "Client project",
  description:
    "A complete travel platform for a Thailand-based client. Travellers can book sightseeing packages, hotels, taxis, and food in one place, while partners and admins manage everything from their own panels.",
  deliverables: [
    { icon: Smartphone, label: "Flutter mobile app", detail: "Bookings, orders, and chat" },
    { icon: Globe, label: "Customer website", detail: "The same services on the web" },
    { icon: Store, label: "Restaurant partner panel", detail: "Menus and food orders" },
    { icon: ShieldCheck, label: "2 super-admin panels", detail: "Running the whole platform" },
  ],
  features: [
    "Sightseeing packages",
    "Taxi & vehicle rentals",
    "Hotel booking",
    "Food ordering",
    "Real-time chat",
    "Payment integration",
  ],
  techStack: ["Flutter", "Dart", "Riverpod", "Firebase", "React"],
  links: [
    { kind: "website", label: "thaiseva.com", href: "https://thaiseva.com/" },
    { kind: "admin", label: "Admin panel", href: "https://gothai-admin.web.app/login" },
  ],
};

const projects = [
  {
    title: "Present-Me",
    subtitle: "Attendance Management System",
    description:
      "Attendance for colleges without the paper register: automated marking, real-time tracking, and separate access for students and teachers.",
    features: [
      "Hotspot, video or manual attendance",
      "HOD admin panel",
      "PDF & Excel reports",
      "Notice board & timetable",
      "Previous year papers",
    ],
    techStack: ["Flutter", "BLoC", "Node.js", "Express", "AWS EC2", "DynamoDB", "React"],
    links: [
      { kind: "website", label: "presentme.in", href: "https://presentme.in/" },
      { kind: "github", label: "Code", href: "https://github.com/pravesh1731/Present-me" },
    ],
  },
  {
    title: "Jasaen",
    subtitle: "Hotel Booking Platform",
    tag: "Client project",
    description:
      "A full-stack hotel booking site for a Thailand-based client, with an admin portal and Cloudbeds integration.",
    features: [
      "Room booking & management",
      "Admin portal",
      "Cloudbeds integration",
      "Google sign-in",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
    links: [],
  },
  {
    title: "AgriDirect",
    subtitle: "Farmer-to-Consumer Marketplace",
    description:
      "Connects farmers directly with buyers, cutting out middlemen so both sides get a fair price. Payments run through smart contracts, so every transaction is transparent and tamper-proof.",
    features: [
      "Direct farmer-to-buyer orders",
      "Inventory management",
      "Real-time chat over sockets",
      "Blockchain smart contracts",
    ],
    techStack: ["Flutter", "GetX", "Firebase", "Cloudinary"],
    links: [
      { kind: "github", label: "Code", href: "https://github.com/pravesh1731/agriDirect" },
      {
        kind: "apk",
        label: "Download APK",
        href: "https://drive.google.com/file/d/1yJUaqovasxyL30G8hz-2IUv6HhmnKqPV/view?usp=sharing",
      },
    ],
  },
];

const ProjectApp = () => {
  return (
    <section id="projects">
      <Heading
        title="Projects"
        subtitle="Client platforms and my own builds, from mobile apps to full systems."
      />

      <FeaturedProject number="01" {...featured} />

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            number={String(index + 2).padStart(2, "0")}
            className={index === projects.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
            {...project}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition-colors duration-200 hover:border-zinc-900"
        >
          <FaGithub className="h-4 w-4" />
          More on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
};

export default ProjectApp;
