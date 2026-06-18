import { Link } from 'react-router-dom'
import Skills from '../components/Skills'

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="px-6 pt-16 pb-12 md:px-20 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-[768px]">
          <div className="mb-12 flex flex-col gap-4">
            <p className="text-base font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">About</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] text-zinc-800 dark:text-white tracking-tight">
              Builder. Analyst. Marketer.
            </h1>
          </div>

          <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-zinc-650 dark:text-zinc-400">
            <p>
              I&apos;m Mohamed Amr El-Halawany — a Commerce student at Cairo University (English Section), majoring in Business Administration.
            </p>
            <p>
              I&apos;m passionate about combining creativity and data to make marketing decisions smarter. My projects span analytics, dashboards, digital marketing, branding, market research, and strategy.
            </p>
            <p>
              I&apos;ve completed 2 internships and worked on real-world marketing projects. I believe that marketing something built to solve a real problem is a service to the world.
            </p>
            <p>
              I build, learn, and share publicly — because that&apos;s one of the most generous things you can do.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-[0.5px] border-white/50 px-8 py-3 text-base font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
              style={{ background: 'linear-gradient(to bottom, #999, #4d4d4d)' }}
            >
              Get in touch
            </Link>
            <a
              href="https://momir.my.canva.site/mohamed-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 px-8 py-3 text-base font-medium text-zinc-700 dark:text-zinc-350 transition-all duration-200 hover:border-zinc-800 dark:hover:border-zinc-250 hover:text-black dark:hover:text-white bg-white dark:bg-zinc-900/30"
            >
              View full portfolio
            </a>
          </div>
        </div>
      </section>

      <Skills />
    </main>
  )
}
