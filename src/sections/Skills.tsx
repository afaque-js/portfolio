// src/sections/Skills.tsx
interface SkillGroup {
  category: string;
  items: string[];
}

const SKILL_DATA: SkillGroup[] = [
  {
    category: "Core Frontend & Frameworks",
    items: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)", "HTML5 / Semantic UI", "Astro"]
  },
  {
    category: "Styling & Layout",
    items: ["Tailwind CSS", "CSS Modules", "Sass / SCSS", "Framer Motion", "Design Systems"]
  },
  {
    category: "State Management & APIs",
    items: ["Zustand", "Redux Toolkit", "React Context", "REST APIs", "GraphQL"]
  },
  {
    category: "Tools & Testing Ecosystems",
    items: ["Git & GitHub", "Vite / Webpack", "Vercel / Netlify", "ESLint & Prettier", "Vitest / Jest"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Technical Toolbelt</h2>
        <p className="text-slate-600 dark:text-slate-400">
          The engineering libraries, structural configurations, and technical tools I use daily.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SKILL_DATA.map((group, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded-md text-sm font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
