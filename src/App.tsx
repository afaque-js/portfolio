// // // src/App.tsx
// // import { useState, useEffect } from 'react';
// // import Hero from './sections/Hero';
// // import Projects from './sections/Project';
// // import Skills from './sections/Skills';
// // import Contact from './sections/Contact';
// // import ThemeToggle from './components/ThemeToggle';

// // export default function App() {
// //   const [darkMode, setDarkMode] = useState(() => {
// //     // Check local storage or system preference on initial load
// //     return localStorage.getItem('theme') === 'dark' ||
// //       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
// //   });

// //   useEffect(() => {
// //     if (darkMode) {
// //       document.documentElement.classList.add('dark');
// //       localStorage.setItem('theme', 'dark');
// //     } else {
// //       document.documentElement.classList.remove('dark');
// //       localStorage.setItem('theme', 'light');
// //     }
// //   }, [darkMode]);

// //   return (
// //     <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
// //       {/* Sticky Header with Single-Page Navigation */}
// //       <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
// //         <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
// //           <a href="#" className="font-bold text-xl tracking-tight">dev.afaque</a>
// //           <nav className="flex items-center gap-6 text-sm font-medium">
// //             <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
// //             <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
// //             <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
// //             <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Main Single Page Layout Container */}
// //       <main className="max-w-5xl mx-auto px-4 py-12 space-y-32">
// //         <Hero />
// //         <Projects />
// //         <Skills />
// //         <Contact />
// //       </main>

// //       {/* Clean Footer */}
// //       <footer className="max-w-5xl mx-auto px-4 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
// //         <p>© {new Date().getFullYear()} Afaque Shaikh. Built with React, Vite, and Tailwind CSS.</p>
// //       </footer>
// //     </div>
// //   );
// // }
// // src/App.tsx
// import { useState, useEffect } from 'react';
// import Hero from './sections/Hero';
// import Projects from './sections/Project';
// import Skills from './sections/Skills';
// import Experience from './sections/Experience';
// import Contact from './sections/Contact';
// import ThemeToggle from './components/ThemeToggle';
// import SciFiBackground from './components/SciFiBackground';

// export default function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Check local storage or system preference on initial load
//     return localStorage.getItem('theme') === 'dark' ||
//       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   return (
//     // relative class added to allow absolute canvas background layers to lock properly beneath elements
//     <div className="relative min-h-screen text-slate-900 dark:text-slate-50 transition-colors duration-300">
      
//       {/* 🚀 Dynamic Tech/Sci-Fi Matrix Grid Layer */}
//       <SciFiBackground isDark={darkMode} />

//       {/* Sticky Header with Single-Page Navigation */}
//       <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
//         <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          
//           {/* Glassmorphism Logo */}
//           <a href="#" className="relative px-3 py-1.5 text-xl font-bold tracking-tight rounded-xl overflow-hidden border border-white/20 dark:border-slate-800/40 bg-white/10 dark:bg-slate-900/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-white/20 dark:hover:bg-slate-900/30">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
//               dev.afaque
//             </span>
//           </a>

//           <nav className="flex items-center gap-6 text-sm font-medium">
//             <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
//             <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
//             <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
//             <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
//             <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
//           </nav>
//         </div>
//       </header>

//       {/* Main Single Page Layout Container */}
//       <main className="max-w-5xl mx-auto px-4 py-12 space-y-32">
//         <Hero />
//         <Projects />
//         <Skills />
//         <Experience />
//         <Contact />
//       </main>

//       {/* Clean Footer */}
//       <footer className="max-w-5xl mx-auto px-4 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
//         <p>© {new Date().getFullYear()} Afaque Shaikh. Built with React, TypeScript, and Tailwind CSS.</p>
//       </footer>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import Hero from './sections/Hero';
import Projects from './sections/Project';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import ThemeToggle from './components/ThemeToggle';
import SciFiBackground from './components/SciFiBackground';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-50 transition-colors duration-300">
      {/* Background */}
      <SciFiBackground isDark={darkMode} />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="relative px-2 md:px-3 py-1.5 text-lg md:text-xl font-bold tracking-tight rounded-xl overflow-hidden border border-white/20 dark:border-slate-800/40 bg-white/10 dark:bg-slate-900/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-white/20 dark:hover:bg-slate-900/30"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              dev.afaque
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>

            <ThemeToggle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-80 border-t border-slate-200 dark:border-slate-800' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md">
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Skills
            </a>

            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-32">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Afaque Shaikh. Built with React,
          TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}