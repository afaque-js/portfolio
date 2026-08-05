// src/sections/Projects.tsx
import ProjectCard from '../components/ProjectCard';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const MY_PROJECTS: ProjectItem[] = [
  {
    title: "E-Commerce Core Component Library",
    description: "A highly optimized, WCAG accessible-compliant UI system engineered with TypeScript and Tailwind. Features strict ARIA attributes and keyboard shortcuts.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Real-Time Enterprise Analytics Dashboard",
    description: "A data-heavy analytical UI utilizing custom canvas integrations, client-side indexing frameworks, caching optimization mechanisms, and state persistence maps.",
    tags: ["React", "Zustand", "Recharts", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Performance Virtualized Interface Engine",
    description: "An isolated client engine capable of fluidly processing and indexing over 50,000 active dynamic data fields smoothly using custom browser viewport containment.",
    tags: ["React", "CSS Modules", "HTML5 Canvas", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Selected Projects</h2>
        <p className="text-slate-600 dark:text-slate-400">
          A showcase of code solutions emphasizing architecture design, system performance, and accessibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MY_PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}
