type SkillGroup = {
  category: string;
  skills: { name: string; level: number }[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 88 },
      { name: "R", level: 72 },
      { name: "Data Cleaning / Feature Engineering", level: 90 },
    ],
  },
  {
    category: "Data & ML",
    skills: [
      { name: "pandas / NumPy", level: 95 },
      { name: "scikit-learn", level: 90 },
      { name: "XGBoost / LightGBM", level: 82 },
      { name: "HuggingFace Transformers", level: 70 },
    ],
  },
  {
    category: "Visualization & Tools",
    skills: [
      { name: "Plotly / Dash", level: 88 },
      { name: "matplotlib / seaborn", level: 85 },
      { name: "Git / GitHub", level: 88 },
      { name: "Jupyter / VS Code", level: 92 },
    ],
  },
  {
    category: "Economics / Econometrics",
    skills: [
      { name: "Causal Inference (IV, DiD, RDD)", level: 85 },
      { name: "statsmodels", level: 82 },
      { name: "Time Series Analysis", level: 75 },
      { name: "NLP / Text Analysis", level: 73 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-[#1e3a8a] rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

const badgeSkills = [
  "Python", "pandas", "NumPy", "scikit-learn", "XGBoost", "SHAP",
  "Plotly", "Dash", "SQL", "Git", "statsmodels", "HuggingFace",
  "Causal Inference", "Time Series", "NLP", "Jupyter", "R", "matplotlib",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-[#020617]">
      <div className="section-container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills &amp; Tools</h2>

        {/* Quick-glance badge row */}
        <div className="flex flex-wrap gap-2 mb-14">
          {badgeSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm font-medium
                         bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300
                         border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category} className="card p-6 space-y-4">
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide font-mono">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
