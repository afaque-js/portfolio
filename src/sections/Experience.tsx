import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Aress Software",
    duration: "Dec 2024 - Present",
    description: [
      "Led end-to-end redevelopment and system architecture of a core e-commerce platform using React, Node.js, and Express, collaborating with design, QA, and product teams.",
      "Designed and optimized MongoDB schemas and query patterns and built RESTful APIs with Express.js and Node.js, integrating secure authentication and authorization.",
      "Implemented server-side rendering (SSR) in Next.js for SEO-critical pages, improving search discoverability and page metrics.",
      "Optimized frontend performance by 48% through Next.js SSR, image lazy-loading, and route-based code splitting, driving a 15% increase in organic SEO traffic.",
      "Architected and deployed CI/CD pipelines using Azure DevOps and GitHub Actions with automated testing, staged deployments, and Sentry monitoring."
    ]
  },
  {
    role: "Software Engineer",
    company: "Concentrix",
    duration: "Sep 2023 - Dec 2024",
    description: [
      "Engineered a scalable React component library using TypeScript and TailwindCSS across banking and taxation platforms, reducing UI development time by 30%.",
      "Optimized Express.js APIs via middleware refactoring, MongoDB query tuning, and indexing, improving response times by 70% (600ms to 180ms).",
      "Refactored legacy MERN applications with code splitting, lazy loading, and React optimizations, reducing bundle size by 45%.",
      "Developed secure authentication and authorization using JWT, OAuth2, and RBAC with Zod-based validation."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Work Experience</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Professional roles where I have built scalable apps, optimized APIs, and engineered frontend solutions.
        </p>
      </div>

      {/* Experience Cards Layout */}
      <div className="grid grid-cols-1 gap-8">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
          >
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {exp.company}
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 px-3 py-1 rounded-md self-start sm:self-center">
                {exp.duration}
              </span>
            </div>

            {/* Bullet Point Metrics */}
            <ul className="space-y-3 list-disc list-outside pl-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {exp.description.map((bullet, i) => (
                <li key={i} className="hover:text-slate-900 dark:hover:text-white transition-colors duration-150">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
