// src/sections/Hero.tsx
export default function Hero() {
  return (
    <section className="pt-20 pb-10 flex flex-col items-start justify-center min-h-[70vh]">
      {/* Subtle status tag to prove active availability */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-6 border border-emerald-200/50 dark:border-emerald-800/30">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Available for Frontend Roles
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-[1.1]">
        Building pixel-perfect,{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          high-performance
        </span>{' '}
        web interfaces.
      </h1>

      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
        Hi, I'm a Frontend Developer specializing in React, TypeScript, and modern styling ecosystems. I build scalable applications focused on accessibility, clean code infrastructure, and top-tier user experiences.
      </p>

      <div className="flex flex-wrap gap-4 w-full sm:w-auto">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200 transition-colors shadow-sm text-center w-full sm:w-auto"
        >
          View Selected Work
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-medium border border-slate-200 hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900 transition-colors text-center w-full sm:w-auto"
        >
          Explore GitHub
        </a>
      </div>
    </section>
  );
}
