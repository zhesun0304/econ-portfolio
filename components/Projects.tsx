import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Causal Inference: Returns to Education",
    description:
      "Applied instrumental variables (IV) and regression discontinuity design to estimate the causal effect of education on earnings using NLSY97 panel data. Controlled for selection bias and endogeneity.",
    impact: "IV estimate: +8.2% wage return per year of schooling (vs. OLS bias of +12.1%)",
    tags: ["Python", "statsmodels", "pandas", "Causal Inference", "IV", "RDD"],
    github: "https://github.com/",
  },
  {
    title: "Customer Churn Prediction Dashboard",
    description:
      "End-to-end ML pipeline predicting telecom churn. Feature engineering on 20+ behavioral variables, XGBoost classifier, SHAP explainability, and an interactive Plotly Dash dashboard for business users.",
    impact: "AUC 0.91 — dashboard adopted by marketing team to prioritize retention outreach",
    tags: ["Python", "XGBoost", "SHAP", "Plotly Dash", "scikit-learn", "SQL"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "NLP Sentiment Analysis: Fed Speeches",
    description:
      "Fine-tuned FinBERT on Federal Reserve FOMC transcripts to classify hawkish vs. dovish sentiment. Correlated sentiment scores with 10-year Treasury yield movements and equity volatility (VIX).",
    impact: "Sentiment score Granger-causes VIX changes with 2-day lag (p < 0.01)",
    tags: ["Python", "HuggingFace", "FinBERT", "NLP", "pandas", "matplotlib"],
    github: "https://github.com/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300">
      <div>
        <h3 className="text-lg font-semibold text-[#0f172a] dark:text-white mb-2 group-hover:text-[#1e3a8a] dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Impact callout */}
      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 rounded-xl px-4 py-2.5">
        <p className="text-xs font-mono text-blue-800 dark:text-blue-300">
          <span className="font-semibold text-[#1e3a8a] dark:text-blue-200">Impact: </span>
          {project.impact}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400
                       hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            <Github size={13} />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#1e3a8a] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-slate-900/30">
      <div className="section-container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Selected Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-400 dark:text-slate-500 text-center">
          More projects on{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e3a8a] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
