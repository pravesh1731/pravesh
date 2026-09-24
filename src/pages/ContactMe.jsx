import { useState } from "react";
import { Card, Heading } from "../Common/Common";
import { ArrowUpRight, Check, Copy, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { EMAIL, GITHUB_URL, LEETCODE_URL, LINKEDIN_URL } from "../data/links";

// wa.me needs the number in international format, without "+".
const WHATSAPP_NUMBER = "917007458210";

const profiles = [
  { name: "GitHub", href: GITHUB_URL, icon: FaGithub },
  { name: "LinkedIn", href: LINKEDIN_URL, icon: FaLinkedin },
  { name: "LeetCode", href: LEETCODE_URL, icon: SiLeetcode },
];

const details = [
  { icon: Phone, value: "+91 70074 58210", href: "tel:+917007458210" },
  {
    icon: MapPin,
    value: "Basti, UP, India 272002",
    href: "https://maps.google.com/?q=Basti,+Uttar+Pradesh+272002",
  },
];

const services = [
  "Mobile app development",
  "Cross-platform apps",
  "Clean, scalable code",
  "High performance",
];

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
];

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2.5 text-sm placeholder:text-zinc-400 outline-none transition focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      "Hello, I received a message from my portfolio.",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section id="contact">
      <Heading
        title="Contact Me"
        subtitle="Have a project in mind or just want to say hi? My inbox is open."
      />

      <div className="grid gap-4 lg:grid-cols-[2fr_3fr]">
        {/* Call to action */}
        <div className="flex flex-col rounded-3xl bg-zinc-900 p-6 text-white sm:p-8">
          <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
            Let’s build something together.
          </h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Open to freelance projects, full-time roles, and collaborations.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300"
              >
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-2">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 py-2 pr-2 pl-4">
              <a href={`mailto:${EMAIL}`} className="truncate text-sm font-medium hover:underline">
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {details.map(({ icon: Icon, value, href }) => (
              <a
                key={value}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Icon className="h-4 w-4 text-zinc-500" />
                {value}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {profiles.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-sm transition-colors hover:border-white hover:bg-white hover:text-zinc-900"
              >
                <Icon className="h-4 w-4" />
                {name}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Message form */}
        <Card className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-semibold">Send a message</h3>
              <p className="mt-1 text-sm text-zinc-500">
                It opens WhatsApp with your message filled in, so it reaches me
                directly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label htmlFor={field.name} className="text-sm font-medium text-zinc-700">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-zinc-700">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-zinc-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-700"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactMe;
