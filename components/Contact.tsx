import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sun.zhe2@northeastern.edu",
    href: "mailto:sun.zhe2@northeastern.edu",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/zhe-sun",
    href: "https://linkedin.com/in/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/zhe-sun",
    href: "https://github.com/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Boston, MA",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-slate-900/30">
      <div className="section-container">
        <p className="section-label">Say Hello</p>
        <h2 className="section-title">Get in Touch</h2>

        <div className="max-w-2xl">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            I am actively seeking full-time and co-op opportunities in data science,
            product analytics, and applied ML. If you are working on interesting problems
            at the intersection of data and decision-making, I would love to connect.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="card p-4 flex items-center gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-[#1e3a8a] dark:text-blue-400">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-slate-800 dark:text-slate-200
                                 hover:text-[#1e3a8a] dark:hover:text-blue-400 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href="mailto:sun.zhe2@northeastern.edu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-800
                       text-white text-sm font-medium transition-colors shadow-sm"
          >
            <Mail size={15} />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
