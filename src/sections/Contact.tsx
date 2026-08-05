// src/sections/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2">Get In Touch</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Looking for a frontend developer or want to collaborate? Shoot me a message directly.
        </p>
      </div>

      <form 
        action="https://formspree.io" 
        method="POST" 
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project or open position..."
            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-50 dark:text-slate-950 dark:hover:bg-slate-200 transition-colors shadow-sm font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
