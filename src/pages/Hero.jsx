import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import HeroImage from "../assets/hero.jpg";
import Button from "../components/Button";
import { GITHUB_URL, LEETCODE_URL, LINKEDIN_URL, RESUME_URL } from "../data/links";

const socials = [
  { label: "GitHub", href: GITHUB_URL, icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: FaLinkedin },
  { label: "LeetCode", href: LEETCODE_URL, icon: SiLeetcode },
];

const facts = [
  { value: "7", label: "Roles & internships" },
  { value: "10+", label: "Projects delivered" },
  { value: "5", label: "Apps on the Play Store" },
  { value: "8.9", label: "CGPA · B.Tech IT" },
];

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:gap-12 sm:text-left">
        <img
          src={HeroImage}
          alt="Pravesh Chaudhary"
          className="h-36 w-36 shrink-0 rounded-full object-cover ring-1 ring-zinc-200 ring-offset-4 sm:h-52 sm:w-52 lg:h-60 lg:w-60"
        />

        <div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
              <MapPin className="h-3.5 w-3.5" />
              Basti, Uttar Pradesh, India
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Pravesh Chaudhary
          </h1>
          <p className="mt-2 text-xl text-zinc-500 sm:text-2xl">
            Software Developer · Mobile & Web
          </p>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-600 sm:mx-0">
            I build mobile and web applications from scratch to production,
            mostly with Flutter and Android, with React and Node.js on the web
            side. Several of my apps are live on the Play Store and App Store.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Button href="#contact" variant="primary">
              Contact Me <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Resume <ArrowUpRight className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-1 sm:ml-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 text-zinc-500 transition-colors hover:text-zinc-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col-reverse bg-white p-4 sm:p-5">
            <dt className="mt-1 text-xs text-zinc-500">{fact.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Hero;
