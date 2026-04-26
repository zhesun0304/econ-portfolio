export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} Zhe Sun
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-600">
          Built with Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
