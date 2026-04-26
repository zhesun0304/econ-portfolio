import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/40
                 dark:from-[#020617] dark:via-[#020617] dark:to-blue-950/20"
    >
      <div className="section-container flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Headshot */}
        <div className="relative flex-shrink-0">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200
                          dark:from-blue-950/50 dark:to-blue-900/30 flex items-center justify-center
                          shadow-card border border-blue-100 dark:border-blue-900/50 overflow-hidden">
            <div className="text-center select-none">
              <div className="text-5xl font-bold text-[#1e3a8a] dark:text-blue-500">ZS</div>
              <p className="text-xs text-blue-500 dark:text-blue-600 mt-1 font-mono">photo</p>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#1e3a8a] border-2 border-white dark:border-[#020617]" />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="section-label">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] dark:text-white leading-tight mb-3">
            Zhe Sun
          </h1>
          <p className="text-base font-semibold text-[#1e3a8a] dark:text-blue-400 mb-5">
            Economics &amp; Computer Science · Northeastern University
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-xl mb-8">
            I combine econometric thinking with modern Python workflows to solve business
            and policy problems — causal inference, predictive modeling, clustering,
            NLP, and interactive dashboards. I aim for clarity, rigor, and practical impact.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e3a8a] hover:bg-blue-800
                         text-white text-sm font-medium transition-colors shadow-sm"
            >
              View Projects
            </a>
            <a
              href="mailto:sun.zhe2@northeastern.edu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800
                         text-slate-700 dark:text-slate-300 text-sm font-medium
                         border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
            >
              <Mail size={14} />
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#1e3a8a] dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
