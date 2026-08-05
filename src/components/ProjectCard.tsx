// src/components/ProjectCard.tsx
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectCard({ title, description, tags, liveUrl, githubUrl }: ProjectProps) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 text-sm font-semibold">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          Live Demo →
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:underline">
          Source Code
        </a>
      </div>
    </div>
  );
}
