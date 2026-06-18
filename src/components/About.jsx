import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const paragraphs = [
  { text: "Hey — thanks for stopping by!", delay: 0 },
  {
    text: "I'm Mohamed Amr El-Halawany. A Commerce student at Cairo University (English Section), majoring in Business Administration.",
    delay: 50,
  },
  {
    text: "I'm passionate about combining creativity and data to make marketing decisions smarter. My work spans analytics, dashboards, digital marketing, strategy & storytelling.",
    delay: 100,
  },
  {
    text: "I've done 2 internships and worked on real-world projects across branding, market research, business insights, social media, and content strategy.",
    delay: 150,
  },
  { text: "At the core of everything I do is this belief:", delay: 200 },
  {
    text: "Marketing something built to solve a real problem is a service to the world.",
    delay: 250,
  },
  {
    text: "So I work hard to make sure good ideas get the attention they deserve.",
    delay: 300,
  },
  {
    text: "I build, learn, and share publicly — because that's one of the most generous things you can do.",
    delay: 350,
  },
]

export default function About() {
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
    <section className="px-6 pt-16 md:px-16 md:pt-28 bg-white dark:bg-zinc-950 transition-colors duration-300" ref={containerRef}>
      <div className="mx-auto max-w-[768px]">
        <div className="flex flex-col gap-6">
          <h2
            data-reveal="true"
            className="text-3xl md:text-5xl font-medium leading-[1.2] text-zinc-850 dark:text-white transition-all duration-700 ease-out"
          >
            Builder. Analyst. Marketer.
          </h2>

          <div className="flex flex-col gap-4 text-xl md:text-2xl font-light leading-relaxed">
            {paragraphs.map(({ text, delay }, i) => (
              <p
                key={i}
                data-reveal="true"
                className="text-zinc-650 dark:text-zinc-400 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${delay}ms` }}
              >
                {i === 2 ? (
                  <>
                    I&apos;m passionate about combining creativity and data to make marketing decisions smarter. My work spans analytics, dashboards,{' '}
                    <Link
                      to="/projects"
                      className="underline decoration-zinc-400/40 dark:decoration-zinc-600/40 underline-offset-4 transition-all duration-200 hover:decoration-zinc-800 dark:hover:decoration-zinc-200 text-zinc-800 dark:text-zinc-200"
                    >
                      digital marketing
                    </Link>
                    , strategy &amp; storytelling.
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </div>

          <div
            data-reveal="true"
            className="transition-all duration-700 ease-out mt-4"
          >
            <p className="text-xl font-medium text-zinc-850 dark:text-white">Mohamed Amr El-Halawany</p>
          </div>
        </div>
      </div>
    </section>
  )
}
