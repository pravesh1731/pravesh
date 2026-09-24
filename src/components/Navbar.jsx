import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { RESUME_URL } from "../data/links";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4">
      <nav
        className={`relative mx-auto flex max-w-5xl items-center justify-between rounded-full border border-zinc-200/80 bg-white/80 py-1.5 pr-1.5 pl-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)]" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-full pr-2">
          <img
            src="/circle_image.png"
            alt=""
            className="h-8 w-8 rounded-full border border-zinc-200 object-cover"
          />
          <span className="text-sm font-semibold tracking-tight">
            Pravesh Chaudhary
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                    active === link.href
                      ? "bg-zinc-100 font-medium text-zinc-900"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Resume <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-zinc-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {open && (
          <div className="absolute inset-x-0 top-full mt-2 rounded-2xl border border-zinc-200 bg-white p-2 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.25)] md:hidden">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-2.5 text-sm ${
                      active === link.href
                        ? "bg-zinc-100 font-medium text-zinc-900"
                        : "text-zinc-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-1 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white"
            >
              Resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
