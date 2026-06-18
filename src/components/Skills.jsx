import { useEffect, useRef } from 'react'

const softSkills = [
  'Market Research',
  'Branding',
  'Content Strategy',
  'Problem Solving',
  'Analytical Thinking',
  'Communication & Writing',
  'Social Media',
]

const techSkills = [
  'Looker Studio',
  'Excel',
  'Google Sheets',
  'SQL',
  'Google Trends',
  'Canva',
  'Mailchimp',
  'Notion',
  'Miro',
  'Zapier',
]

export default function Skills() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = containerRef.current?.querySelectorAll('[data-reveal]')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="px-6 py-16 md:px-20 md:py-24 bg-[#fafafa]/60 dark:bg-zinc-900/20 border-y border-[#eee]/40 dark:border-zinc-800/40 transition-colors duration-300" ref={containerRef}>
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[768px] text-center mb-16" data-reveal="true">
          <p className="text-base font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Core Skills</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium leading-[1.2] text-zinc-800 dark:text-white">
            My toolkit for driving growth
          </h2>
          <p className="mt-4 text-lg font-light text-zinc-500 dark:text-zinc-400">
            Combining analytical rigor with creative communication to deliver marketing results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-stretch">
          <div className="flex flex-col gap-6 md:pr-12 md:border-r border-zinc-200 dark:border-zinc-800" data-reveal="true" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-gradient-to-b from-[#999] to-[#4d4d4d]"></span>
              Professional &amp; Soft Skills
            </h3>
            <p className="text-base font-light text-zinc-550 dark:text-zinc-400 leading-relaxed">
              How I approach marketing problems, communicate strategies, and work inside teams.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-[1.03] hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 hover:shadow-md"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 md:pl-12" data-reveal="true" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-gradient-to-b from-[#4d4d4d] to-black"></span>
              Technical Toolkit &amp; Software
            </h3>
            <p className="text-base font-light text-zinc-550 dark:text-zinc-400 leading-relaxed">
              The tools, databases, and analytics platforms I use to build campaigns, track conversions, and extract insights.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-2">
              {techSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-[1.03] hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 hover:shadow-md"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
