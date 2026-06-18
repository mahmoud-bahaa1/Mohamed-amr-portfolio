import { Link } from 'react-router-dom'

const floatingSkills = [
  { name: 'Looker Studio', x: '4%',  y: '8%',  delay: '0s',   duration: '14s' },
  { name: 'SQL',           x: '84%', y: '6%',  delay: '1s',   duration: '12s' },
  { name: 'Market Research',x: '2%', y: '82%', delay: '2s',   duration: '15s' },
  { name: 'Branding',      x: '82%', y: '86%', delay: '0.5s', duration: '16s' },
  { name: 'Excel',         x: '6%',  y: '46%', delay: '3s',   duration: '11s' },
  { name: 'Social Media',  x: '86%', y: '46%', delay: '1.5s', duration: '13s' },
  { name: 'Content Strategy',x:'38%',y: '5%',  delay: '2.5s', duration: '17s' },
  { name: 'Mailchimp',     x: '48%', y: '90%', delay: '4s',   duration: '14s' },
  { name: 'Data Analytics',x: '14%', y: '28%', delay: '0.8s', duration: '13s' },
  { name: 'Google Sheets', x: '72%', y: '22%', delay: '2.2s', duration: '15s' },
  { name: 'Problem Solving',x: '8%', y: '66%', delay: '3.5s', duration: '18s' },
  { name: 'Canva',         x: '88%', y: '64%', delay: '1.2s', duration: '12s' },
]

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-20 md:py-44 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900/20 dark:to-zinc-950 border-t border-zinc-200/40 dark:border-zinc-800/40 transition-colors duration-300">
      <style>{`
        @keyframes drift-1 {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-12px) translateX(8px) rotate(1deg); }
          66% { transform: translateY(6px) translateX(-10px) rotate(-1.5deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        @keyframes drift-2 {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(10px) translateX(-8px) rotate(-2deg); }
          75% { transform: translateY(-8px) translateX(12px) rotate(1.5deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        @keyframes drift-3 {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-15px) translateX(-15px) rotate(2deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#999]/5 to-[#4d4d4d]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1100px] relative h-[600px] flex flex-col items-center justify-center text-center">
        {floatingSkills.map((skill, index) => {
          const driftAnim = index % 3 === 0 ? 'drift-1' : index % 3 === 1 ? 'drift-2' : 'drift-3';
          
          return (
            <div
              key={skill.name}
              className="absolute hidden sm:flex items-center justify-center pointer-events-auto"
              style={{
                left: skill.x,
                top: skill.y,
                animation: `${driftAnim} ${skill.duration} ease-in-out infinite`,
                animationDelay: skill.delay,
              }}
            >
              <span className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 px-4 py-2 text-xs md:text-sm font-light text-zinc-700 dark:text-zinc-300 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-md cursor-default">
                {skill.name}
              </span>
            </div>
          )
        })}

        <div className="flex sm:hidden flex-wrap gap-2 justify-center max-w-[400px] mb-8 z-10">
          {floatingSkills.slice(0, 6).map(skill => (
            <span key={skill.name} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 shadow-sm">
              {skill.name}
            </span>
          ))}
        </div>

        <div className="z-10 flex flex-col gap-6 items-center max-w-[600px] px-4">
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.2] text-zinc-800 dark:text-white tracking-tight">
            Ready to grow your digital presence?
          </h2>
          <p className="text-base md:text-lg font-light text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Let&apos;s talk about your marketing strategy, analytics dashboards, or branding identity.
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="group cursor-pointer relative inline-flex items-center justify-center rounded-full border-[0.5px] border-white/50 px-12 py-4.5 text-lg font-bold text-white shadow-xl transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-2xl active:scale-[0.98]"
              style={{ background: 'linear-gradient(to bottom, #999, #4d4d4d)' }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
