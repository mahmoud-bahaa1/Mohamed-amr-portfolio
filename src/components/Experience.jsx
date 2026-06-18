import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    role: 'Digital Marketing Intern',
    company: 'Aman Holding',
    period: 'Jul 2024 – Aug 2024',
    bullets: [
      { label: null, text: 'Executed in-depth competitive analysis of 3 major competitors to identify market trends and opportunities in the BNPL and FinTech market.' },
      { label: null, text: "Wrote interactive copy that mirrored the brand's specific engagement style." },
      { label: null, text: 'Designed and launched interactive posts (e.g. emoji quizzes) to increase follower engagement.' },
      { label: null, text: 'Collaborated with the graphics department to brainstorm campaigns targeting Gen Z consumers.' },
      { label: null, text: 'Presented weekly reports on engagement metrics and competitor activity.' },
    ],
  },
  {
    role: 'Content & Outreach Lead',
    company: "Livin' Fel Bateekh",
    period: 'Oct 2025 – March 2026',
    bullets: [
      { label: null, text: 'Developed a full content and outreach strategy including SMART goals, a structured 3-month marketing plan, and platform-specific content calendars.' },
      { label: null, text: 'Ran a deep-dive audit via Meta Business Suite — found a 70% engagement rate and a "conversion gap," then used those numbers to plan the Ramadan and street content strategy.' },
      { label: null, text: 'Managed a team of 5, drafting detailed task briefs and overseeing quality control for all creative output.' },
      { label: null, text: "Created an idea file with fresh, audience-centered content for Gen Z with concepts fully detailed, actionable, and aligned with the brand's tone and engagement goals." },
    ],
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Dec 2025 – Present',
    isCurrent: true,
    bullets: [
      { label: 'Content Management', text: 'Wrote platform-optimized copy with full-cycle content calendars (hooks, captions, CTAs) tailored to each audience and channel.' },
      { label: 'Strategic Analysis', text: 'Conducted comprehensive market research using PESTEL and STP frameworks to define brand positioning and identify market opportunities.' },
      { label: 'Audience Development', text: 'Built detailed user personas to guide content targeting and improve campaign relevance across multiple channels.' },
      { label: 'Email Automation', text: 'Designed and launched automated email marketing campaigns through Mailchimp to streamline lead nurturing and engagement.' },
    ],
  },
]

function ArrowCard({ exp, index, total }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isLast = index === total - 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="block md:hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 p-5 shadow-sm"
        style={{ borderTopColor: '#a1a1aa', borderTopWidth: '2px' }}
      >
        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white mb-4" style={{ background: '#000' }}>
          {index + 1}
        </div>

        <div className="flex flex-col gap-1 mb-4">
          {exp.isCurrent && (
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-zinc-400" />
              <span className="text-xs font-semibold text-zinc-500">Now</span>
            </div>
          )}
          <h3 className="text-base font-bold text-zinc-800 dark:text-white leading-snug">{exp.role}</h3>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{exp.company}</p>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">{exp.period}</span>
          </div>
        </div>

        <div className="h-px mb-4 bg-zinc-100 dark:bg-zinc-800" />

        <ul className="space-y-2.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
              <span>
                {b.label && <span className="font-semibold text-zinc-700 dark:text-zinc-300">{b.label}: </span>}
                {b.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="hidden md:block relative group"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.07))' }}
      >
        <div
          className="relative overflow-visible"
          style={{
            clipPath: isLast
              ? 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 88%, 0% 100%)'
              : 'polygon(0% 0%, 100% 0%, 100% 82%, 50% 100%, 0% 82%)',
          }}
        >
          <div
            className="px-8 pt-7 pb-24 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/50 transition-colors duration-300"
            style={{ borderTopColor: '#a1a1aa', borderTopWidth: '2px' }}
          >
            <div className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white mb-4" style={{ background: '#000' }}>
              {index + 1}
            </div>

            <div className="flex flex-row items-start justify-between gap-3 mb-5">
              <div>
                {exp.isCurrent && (
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-zinc-500" />
                    <span className="text-xs font-semibold text-zinc-500">Now</span>
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-bold text-zinc-800 dark:text-white leading-snug">{exp.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">{exp.company}</p>
              </div>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap mt-1">{exp.period}</span>
            </div>

            <div className="h-px mb-5 bg-zinc-200 dark:bg-zinc-800" />

            <ul className="space-y-2.5">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0" />
                  <span>
                    {b.label && <span className="font-semibold text-zinc-700 dark:text-zinc-300">{b.label}: </span>}
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section
      id="experience"
      className="px-6 py-16 md:px-20 md:py-24 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-[860px]">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-base font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
            Work History
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4 md:hidden">
          {experiences.map((exp, index) => (
            <ArrowCard key={exp.company} exp={exp} index={index} total={experiences.length} />
          ))}
        </div>

        <div className="hidden md:flex flex-col-reverse gap-0">
          {experiences.map((exp, index) => (
            <div key={exp.company} className={index < experiences.length - 1 ? '-mb-12' : ''}>
              <ArrowCard exp={exp} index={index} total={experiences.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
